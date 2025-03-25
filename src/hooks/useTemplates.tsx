import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { templateMapping } from "@/data/templates";

const TemplatesContext = createContext<any>({
  templates: [],
  loadingTemplates: false,
});

export const TemplatesProvider = ({ children }: any) => {
  const [templates, setTemplates] = useState<any[]>([]);
  const [loadingTemplates, setLoading] = useState(true);
  useEffect(() => {
    const cachedTemplates = localStorage.getItem("cachedTemplates");

    if (cachedTemplates) {
      setTemplates(JSON.parse(cachedTemplates));
      setLoading(false);
      return;
    }
    const fetchTemplates = async () => {
      console.log("getting Data");

      setLoading(true);
      const templatesRef = collection(db, "templates");
      const q = query(templatesRef, where("isVisible", "==", true));

      const querySnapshot = await getDocs(q);
      const fetchedTemplates: any[] = [];

      querySnapshot.forEach((doc: any) => {
        const data = doc.data();
        if (templateMapping[data.name]) {
          fetchedTemplates.push({
            id: templateMapping[data.name].id,
            data: templateMapping[data.name].data,
            name: data.name,
            image: data.image,
            isPaid: data.isPaid,
            planStatus: data.planStatus,
            author: data.author,
          });
        }
      });
      console.log(fetchedTemplates);
      // Cache templates in localStorage
      localStorage.setItem("cachedTemplates", JSON.stringify(fetchedTemplates));
      setTemplates(fetchedTemplates);
      setLoading(false);
    };

    fetchTemplates();
  }, []);

  return (
    <TemplatesContext.Provider value={{ templates, loadingTemplates }}>
      {children}
    </TemplatesContext.Provider>
  );
};

export const useTemplates = () => useContext(TemplatesContext);

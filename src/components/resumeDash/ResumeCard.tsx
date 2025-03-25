import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, Edit, MoreVertical, Trash } from "lucide-react";
import { formatDate } from "./formDate";
import { DuplicateDialog } from "./DuplicateDialog";
import { DeleteDialog } from "./DeleteDialog";
import { EditDialog } from "./EditDialog";
import { useNavigate } from "react-router-dom";
import placeholderImage from "@/assets/icons/template.png";
interface Resume {
  id: string;
  name: string;
  templateId?: string;
  updatedAt: {
    seconds: number;
    nanoseconds: number;
  };
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  thumbnail: string;
  resumeData: string;
  userId: string;
}

interface Props {
  resume: Resume;
}

export function ResumeCard({ resume }: Props) {
  const navigate = useNavigate();

  console.log("resume>>", resume);
  const [actionType, setActionType] = useState<
    "edit" | "duplicate" | "delete" | null
  >(null);

  const moveToEditPage = () => {
    navigate(`/select/${resume?.templateId}/start`, { state: { resume } });
  };
  return (
    <Card
      className="overflow-hidden relative border-5"
      style={{ cursor: "pointer" }}
    >
      <CardHeader className="p-0 flex justify-center items-center bg-gray-200">
        <div className="h-[8em] sm:h-[5em] w-full flex items-center justify-center">
          <img
            src={resume.thumbnail || placeholderImage}
            alt={resume.name}
            className={
              resume.thumbnail
                ? "h-full object-cover"
                : "h-[50%] w-[50%] object-contain grayscale opacity-50 "
            }
            onClick={moveToEditPage}
            onError={(e) => {
              e.currentTarget.src = placeholderImage;
              e.currentTarget.className =
                "h-[50%] w-[50%] object-contain grayscale opacity-50 ";
            }}
          />
        </div>
        <div className="absolute top-[2%] right-[2%] ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="h-[0.5em] w-[0.5em] p-0">
                <MoreVertical className="w-full h-full" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="text-[7vw] md:text-[4vw] lg:text-[3vw]"
            >
              <DropdownMenuItem
                onClick={() => setActionType("edit")}
                className="text-[0.4em]"
              >
                <Edit className="mr-2 h-4 w-4 cursor-pointer" />
                Rename
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setActionType("duplicate")}
                className="text-[0.4em]"
              >
                <Copy className="mr-2 h-4 w-4 cursor-pointer" />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setActionType("delete")}
                className="text-[0.4em]"
              >
                <Trash className="mr-2 h-4 w-4 cursor-pointer" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-4 bg-gray-100">
        <h2 className="font-semibold text-[0.5em] truncate text-gray-800">
          {resume.name || "Untitled"}
        </h2>
        <p className="text-[0.3em] text-muted-foreground">
          Last Updated: {formatDate(resume.updatedAt)}
        </p>
      </CardContent>

      {actionType === "edit" && (
        <EditDialog resume={resume} onClose={() => setActionType(null)} />
      )}

      {actionType === "duplicate" && (
        <DuplicateDialog resume={resume} onClose={() => setActionType(null)} />
      )}

      {actionType === "delete" && (
        <DeleteDialog resume={resume} onClose={() => setActionType(null)} />
      )}
    </Card>
  );
}

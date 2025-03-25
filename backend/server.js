const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse JSON and allow CORS
app.use(express.json());
app.use(cors());

// PDF generation endpoint
app.post("/generate-pdf", async (req, res) => {
  try {
    // Get the HTML content from the request body
    const htmlContent = req.body.html;

    if (!htmlContent) {
      return res.status(400).send("HTML content is required.");
    }

    // Save the HTML to a temporary file
    const tempHtmlPath = path.join(__dirname, "temp.html");
    fs.writeFileSync(tempHtmlPath, htmlContent);

    // Launch a headless browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Load the HTML file from the local server
    await page.goto(`http://localhost:${port}/temp.html`, {
      waitUntil: "networkidle0", // Wait for all resources to load
    });

    // Generate the PDF
    const pdfBuffer = await page.pdf({
      format: "A4", // Page format
      margin: {
        top: "20mm",
        right: "20mm",
        bottom: "20mm",
        left: "20mm",
      },
    });

    // Close the browser
    await browser.close();

    // Delete the temporary HTML file
    fs.unlinkSync(tempHtmlPath);

    // Define the folder and file path
    const folderPath = path.join(__dirname, "generated-pdfs"); // Folder to save PDFs
    const filePath = path.join(folderPath, `output-${Date.now()}.pdf`); // Unique file name

    // Create the folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    // Save the PDF to the folder
    fs.writeFileSync(filePath, pdfBuffer);

    // Send a success response
    res.status(200).send({ message: "PDF generated successfully!", filePath });
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF.");
  }
});

// Serve the temporary HTML file
app.use(express.static(__dirname));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import pdfkit

# URL to convert
url = 'https://wkhtmltopdf.org/downloads.html'

# Path to the output PDF file
output_pdf = 'output.pdf'
config = pdfkit.configuration(wkhtmltopdf=r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe')
# Convert URL to PDF
pdfkit.from_url(url, output_pdf,configuration=config)
// import resume from "../media/GunnarCurryResumeMay25.pdf";

function Resume() {
  return (
    <div>
      <iframe title="resume" src={resume} className="w-full h-[82vh] ">
        This browser does not support PDFs. Please download the PDF to view it.
      </iframe>
    </div>
  );
}

export default Resume;

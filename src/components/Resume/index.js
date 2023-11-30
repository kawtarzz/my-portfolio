
import './KAZZOUZI_1120_DEV_files/image002.png'
import './index.scss'

function Resume() {

  const downloadPDF = () => {
    window.open('https://indd.adobe.com/view/publication/7117dedb-320f-44ff-93f2-fe519e08a6f4/1/publication-web-resources/pdf/KAZZOUZI_1120_DEV.pdf', '_blank');
  }

  return (
    <div className="resume-page">
      <button className="flat-button" onClick={() => downloadPDF()
      }>Download Resume</button>
      <div className="resume-iframe">
        <iframe src='https://indd.adobe.com/view/publication/7117dedb-320f-44ff-93f2-fe519e08a6f4/1/publication-web-resources/pdf/KAZZOUZI_1120_DEV.pdf'
          alt="full stack developer" title="kawtar azzouzi resume"
          width="800px" height="1000px"
        />
      </div>

    </div>
  );
}

export default Resume;
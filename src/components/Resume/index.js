import './index.scss'

function Resume() {
  const downloadPDF = () => {
    window.open(
      'https://indd.adobe.com/view/publication/9ef0e468-663e-4edd-be5c-5b39592b5f39/1/publication-web-resources/pdf/KAZZOUZI_1129_DES.pdf',
      '_blank'
    )
  }

  return (
    <div className="resume-page">
      <button className="flat-button" onClick={() => downloadPDF()}>
        Download Resume
      </button>
      <div className="resume-iframe">
        <iframe
          style={{ border: ' 1px solid #777' }}
          src="https://indd.adobe.com/view/publication/9ef0e468-663e-4edd-be5c-5b39592b5f39/1/publication-web-resources/pdf/KAZZOUZI_1129_DES.pdf"
          alt="full stack developer"
          title="kawtar azzouzi resume"
          width="800px"
          height="800px"
          frameborder="0"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
  )
}

export default Resume



const Footer = () => {

    const year = new Date().getFullYear()
  return (
    <footer className="footer bg-secondary">
     
    
      <p className="footertext"> Copyrights  © {year} All rights reserved.</p>
      
    </footer>
  )
}

export default Footer
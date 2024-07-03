

const Footer = () => {

    const year = new Date().getFullYear()
  return (
    <footer className="footer">
     
    
      <p>© {year} My Website. All rights reserved.</p>
      
    </footer>
  )
}

export default Footer
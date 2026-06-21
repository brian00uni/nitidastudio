import { footer } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* <div className="footer__top">
          <div>
            <div className="footer__brand">{footer.brand}</div>
            <p className="footer__tagline">{footer.tagline}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

       
        <div className="footer__bottom">NITIDA Studio {footer.copyright} </div>
      </div>
    </footer>
  )
}

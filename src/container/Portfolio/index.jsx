import React from "react";
import PageHeaderContain from "../../components/PageHeaderContain";
import {BsInfoCircleFill} from "react-icons/bs";
import Image from "../../assets/Ecommersite.jpg"
import Image1 from "../../assets/ecommerce1.jpg"
import './styles.scss';

const Portfolio = () =>
{
    return (
        <section id="portfolio" className="portfolio">
          <PageHeaderContain
            headerText ="My Portfolio"
            icon = {<BsInfoCircleFill  size={30}/>}
          />
          <div>
          <div className="portfolio_ecommerce">
                <a >
                  <img src={Image} alt="sss" />
                  <img src={Image1} alt="sss" />
                </a>
          </div>
          </div>
          

        </section>
    );
};

export default Portfolio;
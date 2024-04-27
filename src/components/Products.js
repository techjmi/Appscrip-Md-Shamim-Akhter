import React, { useEffect, useState } from "react";
import "./css/Products.css";
import arrow from "../Assets/arrow-left.png";
import { fetchProducts } from "../service/api";
import ProductsCard from "./ProductsCard";
import CategoryOption from "./CategoryOption";
const Products = () => {
  const [toggle, setToggle] = useState(false);
  const [filter, setFilter] = useState("Show Filter");
  const [zind, setZind] = useState("");
  const [adjuststyle, setAdjustStyle] = useState("products");
  const [idealfor, setIdealfor] = useState(false);
  const [rotate, setRotate] = useState("rotate90deg");
  const [occasion, setOccasion] = useState(false);
  const [work, setWork] = useState(false);
  const [fabric, setFabric] = useState(false);
  const [segment, setsegment] = useState(false);
  const [suitable, setsuitable] = useState(false);
  const [rawmaterials, setrawmaterials] = useState(false);
  const [patern, setpattern] = useState(false);
  const [icocls, setIcocls] = useState("rotate90deg");
  const [workcls, setworkcls] = useState("rotate90deg");
  const [fabriccls, setfabriccls] = useState("rotate90deg");
  const [segmentcls, setsegmentcls] = useState("rotate90deg");
  const [suitablecls, setsuitablecls] = useState("rotate90deg");
  const [rawcls, setrawcls] = useState("rotate90deg");
  const [patterncls, setpatterncls] = useState("rotate90deg");
  const [count, setCount] = useState(0);
  const [products, setProdducts] = useState([]);

  const handleIdeal = () => {
    idealfor ? setIdealfor(false) : setIdealfor(true);
    !idealfor ? setRotate("rotate270deg") : setRotate("rotate90deg");
  };
  const handleOccasion = () => {
    occasion ? setOccasion(false) : setOccasion(true);
    !occasion ? setIcocls("rotate270deg") : setIcocls("rotate90deg");
  };
  const handlework = () => {
    work ? setWork(false) : setWork(true);
    !work ? setworkcls("rotate270deg") : setworkcls("rotate90deg");
  };
  const handfabric = () => {
    fabric ? setFabric(false) : setFabric(true);
    !fabric ? setfabriccls("rotate270deg") : setfabriccls("rotate90deg");
  };
  const handlesegment = () => {
    segment ? setsegment(false) : setsegment(true);
    !segment ? setsegmentcls("rotate270deg") : setsegmentcls("rotate90deg");
  };
  const handlesuitable = () => {
    suitable ? setsuitable(false) : setsuitable(true);
    !suitable ? setsuitablecls("rotate270deg") : setsuitablecls("rotate90deg");
  };
  const handlerawmeterials = () => {
    rawmaterials ? setrawmaterials(false) : setrawmaterials(true);
    !rawmaterials ? setrawcls("rotate270deg") : setrawcls("rotate90deg");
  };
  const handlepattern = () => {
    patern ? setpattern(false) : setpattern(true);
    !patern ? setpatterncls("rotate270deg") : setpatterncls("rotate90deg");
  };

  //recomend part
  const handleFilterVisibility = () => {
    toggle ? setToggle(false) : setToggle(true);
    !toggle ? setFilter("Hide Filter") : setFilter("Show Filter");
    !toggle ? setAdjustStyle("products width75") : setAdjustStyle("products");
  };

  const handleZindex = () => {
    toggle ? setToggle(false) : setToggle(true);
    toggle ? setZind("zind2") : setZind("");
  };
  //get the products data from fakestore api and store in set Products
  const getProducts = async () => {
    try {
      const res = await fetchProducts();
      setProdducts(res);
      console.log(res);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };
  // category manage
  const [category, setCategory] = useState("");
  // console.log("cat...", category);
  const handleCheckboxChange = (value) => {
    setCategory(value);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const categoryOptions = [
    {
      label: "IDEAL FOR",
      state: idealfor,
      handler: handleIdeal,
      cls: rotate,
    },
    {
      label: "OCCASION",
      state: occasion,
      handler: handleOccasion,
      cls: icocls,
    },
    {
      label: "WORK",
      state: work,
      handler: handlework,
      cls: icocls,
    },
    {
      label: "FABRIC",
      state: fabric,
      handler: handfabric,
      cls: icocls,
    },
    {
      label: "SEGMENT",
      state: segment,
      handler: handlesegment,
      cls: icocls,
    },
    {
      label: "SUITABLE FOR",
      state: suitable,
      handler: handlesuitable,
      cls: icocls,
    },
    {
      label: "RAW MATERIALS",
      state: rawmaterials,
      handler: handlerawmeterials,
      cls: icocls,
    },
    {
      label: "PATTERN",
      state: patern,
      handler: handlepattern,
      cls: icocls,
    },
  ];
  return (
    <>
      <section className="filter">
        <span className="showfilter">
          <span className="qty">3425 ITEMS</span>
          <span className="hidefilter" onClick={handleFilterVisibility}>
            <span className="ico">
              <img style={{}} src={arrow} alt="arrow" />
            </span>
            <span className="txt">{filter}</span>
          </span>
        </span>
        <span className="filterlogo" onClick={handleZindex}>
          FILTER
        </span>
        <span className="sort">
          <span className="txt">
            <select name="" id="select" onChange={() => setCount(count + 1)}>
              <option value="Recommended">RECOMMENDED</option>
              <option value="Newest first">NEWEST FIRST</option>
              <option value="Popular">POPULAR</option>
              <option value="hight to low">PRICE: HIGH TO LOW</option>
              <option value="low to high">PRICE: LOW TO HIGH</option>
            </select>
          </span>
        </span>
      </section>
      <section className="body-content">
        {toggle ? (
          <aside id="filter" className={zind}>
            {categoryOptions.map((option, index) => (
              <div key={index} className="category-option">
                <span>
                  {option.label}{" "}
                  <img
                    src={arrow}
                    alt=""
                    onClick={option.handler}
                    className={option.cls}
                  />
                </span>
                <span className={`${option.label.toLowerCase()}-type`}>
                  All
                </span>
                {option.state ? (
                  <CategoryOption
                    handleCheckboxChange={handleCheckboxChange}
                    category={category}
                  />
                ) : null}
              </div>
            ))}
          </aside>
        ) : null}

        <section className={adjuststyle}>
          {/* {console.log(products)} */}
          {products
            .filter((item) => !category || item.category.includes(category))
            .map((item, index) => (
              <div
                className="card"
                key={index}
                style={{
                  width: "240px",
                  height: "370px",
                  marginRight: "10px",
                }}
              >
                <ProductsCard items={item} category={category} />
              </div>
            ))}
        </section>
      </section>
    </>
  );
};

export default Products;

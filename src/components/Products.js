import React, { useEffect, useState } from "react";
import "./css/Products.css";
import arrow from "../Assets/arrow-left.png";
import Mock from "../Assets/mockapi/mockdata";
import heart from "../Assets/heart.png";
import { fetchProducts } from "../service/api";
import ProductsCard from "./ProductsCard";
import CategoryOption from "./CategoryOption";
const Products = () => {
  const [toggle, setToggle] = useState(false);
  const [filter, setFilter] = useState("Show Filter");
  const [zind, setZind] = useState("");
  const [adjuststyle, setAdjustStyle] = useState("products");
  const mydata = Mock;
  const [Mockdata, setMockData] = useState(mydata);
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
  useEffect(() => {}, [Mockdata]);

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
  const handlelowtohigh = () => {
    let xy = mydata.sort((a, b) => a.price - b.price);
    setMockData(xy);
    console.log(Mockdata);
    setCount(count + 1);
  };
  const handlehightolow = () => {
    let xy = mydata.sort((a, b) => b.price - a.price);
    setMockData(xy);
    console.log(Mockdata);
    setCount(count + 1);
  };
  const handlerecommended = () => {
    let xy = mydata.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setMockData(xy);
    console.log(Mockdata);
    setCount(count + 1);
  };
  const handlePopular = () => {
    let xy = mydata.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    setMockData(xy);
    console.log(Mockdata);
    setCount(count + 1);
  };

  const handleFilterVisibility = () => {
    toggle ? setToggle(false) : setToggle(true);
    !toggle ? setFilter("Hide Filter") : setFilter("Show Filter");
    !toggle ? setAdjustStyle("products width75") : setAdjustStyle("products");
  };

  const handleZindex = () => {
    toggle ? setToggle(false) : setToggle(true);
    toggle ? setZind("zind2") : setZind("");
  };
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
  console.log("cat...", category);
  const handleCheckboxChange = (value) => {
    setCategory(value);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const categoryOptions = [
    {
      label: 'IDEAL FOR',
      state: idealfor,
      handler: handleIdeal,
      cls: rotate,
    },
    {
      label: 'OCCASION',
      state: occasion,
      handler: handleOccasion,
      cls: icocls,
    },
    {
      label: 'WORK',
      state: work,
      handler: handlework,
      cls: icocls,
    },
    {
      label: 'FABRIC',
      state: fabric,
      handler: handfabric,
      cls: icocls,
    },
    {
      label: 'SEGMENT',
      state: segment,
      handler: handlesegment,
      cls: icocls,
    },
    {
      label: 'SUITABLE FOR',
      state: suitable,
      handler: handlesuitable,
      cls: icocls,
    },
    {
      label: 'RAW MATERIALS',
      state: rawmaterials,
      handler: handlerawmeterials,
      cls: icocls,
    },
    {
      label: 'PATTERN',
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
              <option value="Recommended" onClick={handlerecommended}>
                RECOMMENDED
              </option>
              <option value="Newest first"> NEWEST FIRST</option>
              <option value="Popular" onClick={handlePopular}>
                POPULAR
              </option>
              <option value="hight to low" onClick={handlehightolow}>
                PRICE : HIGH TO LOW
              </option>
              <option value="low to high" onClick={handlelowtohigh}>
                PRICE : LOW TO HIGH
              </option>
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
          {option.label}{' '}
          <img src={arrow} alt="" onClick={option.handler} className={option.cls} />
        </span>
        <span className={`${option.label.toLowerCase()}-type`}>All</span>
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
          {console.log(products)}
          {products.map(
            (items, ind) =>
              items.category.includes(category) && (
                <div
                  className="card"
                  key={ind}
                  style={{
                    width: "240px",
                    height: "370px",
                    marginRight: "10px",
                  }}
                >
                  <ProductsCard items={items} category={category} />
                </div>
              )
          )}
        </section>
      </section>
    </>
  );
};

export default Products;

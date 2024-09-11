import Image from "next/image";
import { Inter } from "next/font/google";
import style from "@/styles/index.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const imgRef = useRef(null); // 创建一个ref来引用DOM元素
  const movelong = useRef(0);
  let a = 0;
  const items = [
    {
      key: "1",
      label: "首页",
      children: [
        {
          key: "1-1",
          label: "关于我们",
        },
        {
          key: "1-2",
          label: "公司介绍",
        },
      ],
    },
    {
      key: "2",
      label: "团队介绍",
      children: [
        {
          key: "2-1",
          label: "团队介绍",
        },
        {
          key: "2-2",
          label: "团队介绍",
        },
      ],
    },
    {
      key: "3",
      label: "团队介绍",
      children: [
        {
          key: "3-1",
          label: "团队介绍2222222",
          children:[
            {
              key: "3-1-1",
              label: "人员介绍",
            }
          ]
        },
        {
          key: "3-2",
          label: "团队介绍",
        },
      ],
    },
  ];
  const schoolInformation = [
    {
      id: 1,
      title: "学校简介",
      url: "",
    },
    {
      id: 2,
      title: "学校简介",
      url: "",
    },
    {
      id: 3,
      title: "学校简介",
      url: "",
    },
    {
      id: 4,
      title: "学校简介",
      url: "",
    },
    {
      id: 5,
      title: "学校简介",
      url: "",
    },
    {
      id: 6,
      title: "学校简介",
      url: "",
    },
    {
      id: 7,
      title: "学校简介",
      url: "",
    },
  ];
  const imgArray=[
    {
      url:'https://www.preciousbloodhv.edu.hk/sites/default/files/styles/slide_show/public/slide_show/banner1.png?itok=649RdMKP'
    },
    {
      url:'https://www.preciousbloodhv.edu.hk/sites/default/files/styles/slide_show/public/slide_show/img_9614.jpg?itok=UDiAa3Xj'
    },
    {
      url:'https://www.preciousbloodhv.edu.hk/sites/default/files/styles/slide_show/public/slide_show/img-20240119-wa0006.jpg?itok=1FP-umhi'
    },
    {
      url:'https://www.preciousbloodhv.edu.hk/sites/default/files/styles/slide_show/public/slide_show/hlk02136_-_1.jpg?itok=gehGAoHx'
    }
  ]
  const schoolActivityImg=[
    {
      url:'https://www.preciousbloodhv.edu.hk/sites/default/files/styles/news/public/cover/P6.JPG?itok=SL3-zTex'
    },
    {
      url:'https://www.preciousbloodhv.edu.hk/sites/default/files/styles/news/public/cover/IMG_9377.jpg?itok=L6a94nOr'
    },
    {
      url:'https://www.preciousbloodhv.edu.hk/sites/default/files/styles/news/public/cover/P6.JPG?itok=SL3-zTex'
    },
    {
      url:'https://www.preciousbloodhv.edu.hk/sites/default/files/styles/news/public/cover/IMG_9377.jpg?itok=L6a94nOr'
    },
    {
      url:'https://www.preciousbloodhv.edu.hk/sites/default/files/styles/news/public/cover/P6.JPG?itok=SL3-zTex'
    },
    {
      url:'https://www.preciousbloodhv.edu.hk/sites/default/files/styles/news/public/cover/IMG_9377.jpg?itok=L6a94nOr'
    },
  ]
  function MenuItem({ item }) {
    return (
      <li class={style.item}>
        {item.title}
        {item.children.length > 0 && (
          <ul class={style.itemUl}>
            {item.children.map((child) => (
              <MenuItem key={child.id} item={child} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  function Menu({ menuData }) {
    return (
      <ul class={style.show}>
        {menuData.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }

  const rightMove = () => {
    if (movelong.current <= -766) {
      movelong.current = -766;
    } else {
      movelong.current -= 100;
      imgRef.current.style.left = `${movelong.current}px`;
    }
  };

  const leftMove = () => {
    if (movelong.current >= 0) {
      movelong.current = 0;
    } else {
      movelong.current += 100;
      imgRef.current.style.left = `${movelong.current}px`;
    }
  };

  return (
    <main className={`flex min-h-screen flex-col relative  bg-orange-100`}>
      <title>教育网页demo</title>
      <div className="flex absolute right-0 mr-10">
        <div class={style.login}>
          <span>eClass</span>
          <input class={style.input}></input>
          <input class={style.input}></input>
          <a class={style.submit}>登入</a>
        </div>
        <div className="flex z-10">
          <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/i_gmail.png"></img>
          <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/i_fb.png"></img>
          <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/i_ig.png"></img>
        </div>
      </div>
      <header class={style.bgUrl}>
        <nav className="flex absolute bottom-0 justify-around w-full">
          <div className="w-full">
            <nav>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <div>
                  <div class={style.move}>
                    <img
                      className="mx-auto "
                      src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/btn_sch.png"
                    ></img>
                    <div className="bg-orange-400 pt-2 pb-2">学校简介</div>
                  </div>
                </div>
              </Dropdown>
            </nav>
          </div>
          <div className="w-full">
            <nav>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <div>
                  <div class={style.move}>
                    <img
                      className="mx-auto "
                      src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/btn_course.png"
                    ></img>
                    <div className="bg-orange-400 pt-2 pb-2">学校简介</div>
                  </div>
                </div>
              </Dropdown>
            </nav>
          </div>
          <div className="w-full">
            <nav>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <div>
                  <div class={style.move}>
                    <img
                      className="mx-auto "
                      src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/btn_event.png"
                    ></img>
                    <div className="bg-orange-400 pt-2 pb-2">学校简介</div>
                  </div>
                </div>
              </Dropdown>
            </nav>
          </div>
          <div className="w-full">
            <nav>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <div>
                  <div class={style.move}>
                    <img
                      className="mx-auto "
                      src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/btn_growing_up.png"
                    ></img>
                    <div className="bg-orange-400 pt-2 pb-2">学校简介</div>
                  </div>
                </div>
              </Dropdown>
            </nav>
          </div>
          <div className="w-full">
            <nav>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <div>
                  <div class={style.move}>
                    <img
                      className="mx-auto "
                      src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/btn_awards.png"
                    ></img>
                    <div className="bg-orange-400 pt-2 pb-2">学校简介</div>
                  </div>
                </div>
              </Dropdown>
            </nav>
          </div>
          <div className="w-full">
            <nav>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <div>
                  <div class={style.move}>
                    <img
                      className="mx-auto "
                      src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/btn_information.png"
                    ></img>
                    <div className="bg-orange-400 pt-2 pb-2">学校简介</div>
                  </div>
                </div>
              </Dropdown>
            </nav>
          </div>
          <div className="w-full">
            <nav>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <div>
                  <div class={style.move}>
                    <img
                      className="mx-auto "
                      src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/btn_ncs.png"
                    ></img>
                    <div className="bg-orange-400 pt-2 pb-2">学校简介</div>
                  </div>
                </div>
              </Dropdown>
            </nav>
          </div>
        </nav>
      </header>
      <div className="flex w-full bg-orange-100 justify-around items-center">
        <div className="w-full flex justify-around mt-10">
          <div className="w-7/12 h-full p-2 bg-white">
            <Carousel arrows autoplay infinite={true}>
              {imgArray.map((items)=>{
                return <div>
                <img src={items.url} alt="轮播图"></img>
              </div>
              })}
            </Carousel>
          </div>
          <div
            className="w-4/12 h-full pb-8 relative"
            style={{ backgroundColor: "rgb(226, 210, 191)" }}
          >
            <div className="flex  items-center">
              <div className="flex  items-center ">
                <img
                  className="w-20 h-16"
                  src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/new_icon.png"
                ></img>
                <p className="text-orange-500 text-3xl">最新消息</p>
              </div>
            </div>
            <div
              className="flex justify-center items-center w-4/5  bg-white mx-auto"
              style={{
                border: "3px solid orange",
                borderRadius: "5px",
              }}
            >
              <ul className="w-full overflow-auto h-96 ">
                <li
                  className="text-2xl w-11/12 mx-auto pt-2"
                  style={{ borderBottom: "1px dashed black" }}
                >
                  <div className="flex text-xl">
                    <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/date.png"></img>
                    <span style={{ color: "#ffb708" }}>10/07/2024</span>
                  </div>
                  2024 - 2025年度小一入學候補生申請表
                </li>
                <li
                  className="text-2xl w-11/12 mx-auto pt-2"
                  style={{ borderBottom: "1px dashed black" }}
                >
                  <div className="flex text-xl">
                    <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/date.png"></img>
                    <span style={{ color: "#ffb708" }}>10/07/2024</span>
                  </div>
                  2024 - 2025年度小一入學候補生申請表
                </li>
                <li
                  className="text-2xl w-11/12 mx-auto pt-2"
                  style={{ borderBottom: "1px dashed black" }}
                >
                  <div className="flex text-xl">
                    <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/date.png"></img>
                    <span style={{ color: "#ffb708" }}>10/07/2024</span>
                  </div>
                  2024 - 2025年度小一入學候補生申請表
                </li>
                <li
                  className="text-2xl w-11/12 mx-auto pt-2"
                  style={{ borderBottom: "1px dashed black" }}
                >
                  <div className="flex text-xl">
                    <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/date.png"></img>
                    <span style={{ color: "#ffb708" }}>10/07/2024</span>
                  </div>
                  2024 - 2025年度小一入學候補生申請表
                </li>
                <li
                  className="text-2xl w-11/12 mx-auto pt-2"
                  style={{ borderBottom: "1px dashed black" }}
                >
                  <div className="flex text-xl">
                    <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/date.png"></img>
                    <span style={{ color: "#ffb708" }}>10/07/2024</span>
                  </div>
                  2024 - 2025年度小一入學候補生申請表
                </li>
              </ul>
            </div>
            <div className="w-4/5 mx-auto flex relative">
              <a class={style.buttonCSS2}>更多</a>
            </div>
            <div class={style.zhejiao}></div>
          </div>
        </div>
      </div>
      <div className=" bg-yellow-500 flex items-center justify-around w-11/12 mx-auto rounded-2xl my-5">
        <div className="flex items-center ">
          <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/bible.png"></img>
          <p className="text-white text-3xl">圣经金句:</p>
        </div>
        <div class={style.scrolltextcontainer}>
          <p class={style.scrolltext}>
            你若有能力做到，不要拒絕向有求於你的人行善。
          </p>
        </div>
      </div>
      <div className="flex w-full bg-orange-100   justify-around items-center">
        <div className="w-full flex  h-full justify-around">
          <div className="w-1/3  bg-orange-500 pb-5 relative">
            <div className="flex justify-around items-center mt-5">
              <div className="flex justify-center items-center ">
                <img
                  className="w-20 h-16"
                  src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/award_icon.png"
                ></img>
                <p className="text-white text-3xl">学生表现</p>
              </div>
              <a class={style.buttonCSS}>更多</a>
            </div>
            <div
              className="flex justify-center items-center w-4/5 h-96 bg-white mx-auto"
              style={{
                border: "3px solid orange",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            >
              <ul className="w-full h-full overflow-auto">
                <li
                  className="text-2xl w-11/12 mx-auto pt-2"
                  style={{ borderBottom: "1px dashed black" }}
                >
                  <div className="flex text-xl">
                    <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/date.png"></img>
                    <span style={{ color: "#ffb708" }}>10/07/2024</span>
                  </div>
                  2024 - 2025年度小一入學候補生申請表
                </li>
                <li
                  className="text-2xl w-11/12 mx-auto pt-2"
                  style={{ borderBottom: "1px dashed black" }}
                >
                  <div className="flex text-xl">
                    <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/date.png"></img>
                    <span style={{ color: "#ffb708" }}>10/07/2024</span>
                  </div>
                  2024 - 2025年度小一入學候補生申請表
                </li>
                <li
                  className="text-2xl w-11/12 mx-auto pt-2"
                  style={{ borderBottom: "1px dashed black" }}
                >
                  <div className="flex text-xl">
                    <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/date.png"></img>
                    <span style={{ color: "#ffb708" }}>10/07/2024</span>
                  </div>
                  2024 - 2025年度小一入學候補生申請表
                </li>
                <li
                  className="text-2xl w-11/12 mx-auto pt-2"
                  style={{ borderBottom: "1px dashed black" }}
                >
                  <div className="flex text-xl">
                    <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/date.png"></img>
                    <span style={{ color: "#ffb708" }}>10/07/2024</span>
                  </div>
                  2024 - 2025年度小一入學候補生申請表
                </li>
                <li
                  className="text-2xl w-11/12 mx-auto pt-2"
                  style={{ borderBottom: "1px dashed black" }}
                >
                  <div className="flex text-xl">
                    <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/date.png"></img>
                    <span style={{ color: "#ffb708" }}>10/07/2024</span>
                  </div>
                  2024 - 2025年度小一入學候補生申請表
                </li>
                <li
                  className="text-2xl w-11/12 mx-auto pt-2"
                  style={{ borderBottom: "1px dashed black" }}
                >
                  <div className="flex text-xl">
                    <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/date.png"></img>
                    <span style={{ color: "#ffb708" }}>10/07/2024</span>
                  </div>
                  2024 - 2025年度小一入學候補生申請表
                </li>
              </ul>
            </div>
            <img
              className="absolute z-10"
              style={{
                bottom: "-40px",
                right: "-40px",
                width: "100px",
                height: "120px",
              }}
              src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/pe_girl.png"
            ></img>
          </div>
          <div className="w-2/3 bg-white px-6 pb-3">
            <div className="flex justify-between items-center mt-5">
              <div className="flex justify-center items-center">
                <img
                  className="w-20 h-16"
                  src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/event_icon.png"
                ></img>
                <p className="text-orange-300 text-3xl">校园动态</p>
              </div>
              <a class={style.buttonCSS}>更多</a>
            </div>
            <div>
              <div class="grid grid-cols-3 gap-4">
                {schoolActivityImg.map((item)=>{
                  return <div class={style.imgScale}>
                  <img
                    className="rounded-2xl"
                    src={item.url}
                  ></img>
                </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center   bg-orange-100 w-full h-52">
        <img
          className="z-10"
          src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/slick/left.png"
          onClick={leftMove}
        ></img>
        <div className="w-4/5 overflow-hidden">
          <div ref={imgRef} className="flex  relative">
            <img
              class="mr-16 rounded-2xl"
              src="https://www.preciousbloodhv.edu.hk/sites/default/files/styles/useful_link/public/useful/link_pth.png?itok=wL_r-Alx"
            ></img>
            <img
              class="mr-16 rounded-2xl"
              src="https://www.preciousbloodhv.edu.hk/sites/default/files/styles/useful_link/public/useful/link_kids.png?itok=M2QbPK7s"
            ></img>
            <img
              class="mr-16 rounded-2xl"
              src="https://www.preciousbloodhv.edu.hk/sites/default/files/styles/useful_link/public/useful/esmart.png?itok=T4iBRyxq"
            ></img>
            <img
              class="mr-16 rounded-2xl"
              src="https://www.preciousbloodhv.edu.hk/sites/default/files/styles/useful_link/public/useful/link_read.png?itok=AnWbxDRs"
            ></img>
            <img
              class="mr-16 rounded-2xl"
              src="https://www.preciousbloodhv.edu.hk/sites/default/files/styles/useful_link/public/useful/link_pth.png?itok=wL_r-Alx"
            ></img>
          </div>
        </div>
        <img
          className="z-10"
          src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/slick/right.png"
          onClick={rightMove}
        ></img>
      </div>
      <footer className="w-full">
        <div className="flex justify-center items-center w-full h-20 bg-orange-300">
          <ul className="flex  justify-center items-center ">
            <li className="flex justify-center items-center">
              <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/map.png"></img>
              <span>地址：香港跑馬地成和道72號</span>
            </li>
            <li className="flex justify-center items-center ml-5">
              <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/tel.png"></img>
              <span>電話：2572 3851</span>
            </li>
            <li className="flex justify-center items-center ml-5">
              <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/fax.png"></img>
              <span>傳真：2572 4421</span>
            </li>
            <li className="flex justify-center items-center ml-5">
              <img src="https://www.preciousbloodhv.edu.hk/sites/all/themes/ntemplate/images/web/mail.png"></img>
              <span>info@preciousbloodhv.edu.hk </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center w-full h-20 bg-orange-400 justify-between px-10">
          <div className="text-white">
            網頁地圖 | Copyright ©2024 Precious Blood Primary School. All rights
            reserved.
          </div>
          <div className="text-white">By: ctd.hk</div>
        </div>
        <div></div>
      </footer>
    </main>
  );
}

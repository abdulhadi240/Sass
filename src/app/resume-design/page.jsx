'use client'
import React from 'react'
import { usePDF } from 'react-to-pdf';
const page = () => {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  return (
    <div>
        <button onClick={() => toPDF()}>Download PDF</button>
    
    <div ref={targetRef} className="w-full relative flex flex-row  items-start justify-start tracking-[normal]">
      <section className="flex-1 bg-white overflow-hidden flex flex-col items-start justify-start pt-[30px] pb-[49.5px] pr-[22px] pl-[33px] box-border max-w-full text-left text-4xs text-black font-poppins">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-0.5">
          <div className="relative tracking-[0.1em] inline-block min-w-[85px] whitespace-nowrap">
            +625674935050
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[13.5px] gap-[13px] text-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start">
                <h1 className="m-0 h-6 relative text-inherit font-medium font-inherit inline-block">
                  ARFIAN CAHYA DWI SETYA
                </h1>
                <div className="relative text-3xs tracking-[0.35em] font-light inline-block min-w-[120px]">
                  UI/UX DESIGNER
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-4xs">
                <div className="relative tracking-[0.1em] whitespace-nowrap">
                  arfian.dwisetya@gmail.com
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end text-4xs">
              <div className="w-[167px] relative tracking-[0.1em] inline-block">
                www.cahyafian.herokuapp.com
              </div>
            </div>
          </div>
          <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-black" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[13.5px] max-w-full text-sm">
          <div className="w-[250px] flex flex-row items-start justify-between gap-[20px]">
            <h2 className="m-0 relative text-inherit tracking-[0.23em] font-medium font-inherit inline-block min-w-[485px]">
              PROFILE
            </h2>
            <h2 className="m-0 relative text-inherit tracking-[0.23em] font-medium font-inherit inline-block min-w-[250px]">
              PROJECTS
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-32 max-w-full text-3xs text-darkslategray mq450:flex-wrap">
            <div className="w-[250px] flex flex-col items-start justify-start gap-[10px] mq450:flex-1">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[2.5px]">
                <div className="h-[0.5px] min-w-[350px] flex-1 relative box-border border-t-[0.5px] border-solid border-black" />
              </div>
              <div className="self-stretch relative min-w-[350px] text-start">
                <span className="font-light">{`Fresh graduate at UGM, have made several projects both `}</span>
                <span className="font-medium">UI/UX Design</span>
                <span className="font-light">{` and `}</span>
                <span className="font-medium">website developer</span>
                <span className="font-light">{`. I also like to do website development, both static and dynamic websites. `}</span>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start min-w-[350px] pt-0 px-0 pb-1">
                <div className="flex-1 relative font-light">
                  Very organized person, always comfortable learning new things,
                  always practicing, problem solver. NBA fans, Outdoor Activity,
                  Extrovert person, interactive.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[2.5px] gap-[6px]">
                <input
                  className="w-[100px] [border:none] [outline:none] font-medium font-poppins text-sm bg-[transparent] h-[21px] relative tracking-[0.23em] text-black text-left inline-block p-0"
                  placeholder="SKILLS"
                  type="text"
                />
                <div className="min-w-[350px] h-[0.5px] relative box-border border-t-[0.5px] border-solid border-black" />
              </div>
              <div className="self-stretch  min-w-[350px]">
                <span className="font-light">{`I have experience working individually as well as working with a team to `}</span>
                <span className="font-medium">brainstrom</span>
                <span className="font-light">{` and `}</span>
                <span className="font-medium">whiteboard</span>
                <span className="font-light">{` concepts. I can create `}</span>
                <span className="font-medium">wireframing</span>
                <span className="font-light">{` at varying `}</span>
                <span className="font-medium">levels of fidelity</span>
                <span className="font-light">{`, and enjoy prototyping ideas. I have some `}</span>
                <span className="font-medium">front-end</span>
                <span className="font-light">{` and `}</span>
                <span className="font-medium">back-end</span>
                <span className="font-light">
                  {" "}
                  coding experience. I have workedwith disributed team using
                  version control systems (Github)
                </span>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                
                <div className="self-stretch relative font-light">
                  <ul className="m-0 font-inherit text-inherit ">
                    <li className="mb-0">Figma</li>
                    <li className="mb-0">Photoshop</li>
                    <li className="mb-0">After Effect</li>
                    <li className="mb-0">Arduino</li>
                    <li className="mb-0">Affinity Designer</li>
                    <li className="mb-0">{`HTML & CSS`}</li>
                    <li className="mb-0">Javascript</li>
                    <li className="mb-0">PHP</li>
                    <li className="mb-0">Notion</li>
                    <li className="mb-0">Framer</li>
                    <li>Zeplin</li>
                  </ul>
                </div>
              </div>
            </div>
            <img
              className="h-[633px] w-0 relative object-contain mq450:hidden"
              loading="lazy"
              alt=""
              src="/line-4.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[218px] max-w-full">
              <div className="self-stretch h-[3px] flex flex-row items-start justify-start pt-0 px-0 pb-[2.5px] box-border max-w-full">
                <div className="self-stretch flex-1 relative box-border max-w-full border-t-[0.5px] border-solid border-black" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[156px] flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch relative font-medium">
                          Universitas Gadjah Mada
                        </div>
                        <div className="relative text-5xs inline-block min-w-[127px]">
                          D4 Teknologi Rekayasa Internet
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-5xs">
                        <div className="relative font-light inline-block min-w-[119px]">
                          Agustus 2017 - November 2021
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-5xs font-light">
                      In lectures I learned about internet engineering
                      technology, which learned about computer networks,
                      internet, internet of things, cisco configuration,
                      mikrotik, huawei, network security, internet security and
                      learned a little about programming language concepts using
                      java for OOP and C, C++, and C#. In addition, learn about
                      computer basics and computer applications.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[156px] flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch relative font-medium">
                          DTS Skilvul
                        </div>
                        <div className="relative text-5xs">
                          Professional Academy UI/UX Design
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-5xs">
                        <div className="relative font-light inline-block min-w-[119px]">
                          Agustus 2021 - November 2021
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-5xs font-light">
                      In this training, you will learn about UI/UX fundamentals,
                      concepts and process design implementations, conduct
                      research for the needs of ui and ux creation, compile user
                      journeys, apply brief and research results into
                      wireframes, create user interfaces, create system designs,
                      implement UX writing, and make prototyping of designs that
                      have been made.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                      <div className="w-[156px] flex flex-col items-start justify-start gap-[5px]">
                        <div className="self-stretch relative font-medium">
                          Progate
                        </div>
                        <div className="relative text-5xs inline-block min-w-[127px]">
                          Coding Experience Bootcamp
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-5xs">
                        <div className="relative font-light inline-block min-w-[112px]">
                          June 2020 - Desember 2020
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative text-5xs font-light">
                      This training is carried out by the UGM Faculty of Social
                      and Political Sciences in collaboration with Progate. In
                      this training, you will learn about the website
                      development path using node js, where you will learn the
                      basics first, namely HTML, CSS, and Javascript. Then
                      proceed to node js and SQL training, where in this
                      training there are also projects to work in teams and
                      individuals who will later create dynamic website projects
                      using node js as the back-end and html, css, and
                      javascript as the front-end
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[2.5px] gap-[4px]">
                <input
                  className="w-[172px] [border:none] [outline:none] font-medium font-poppins text-sm bg-[transparent] h-[21px] relative tracking-[0.23em] text-black text-left inline-block p-0"
                  placeholder="WORK EXPERIENCE"
                  type="text"
                />
                <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-black" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <div className="w-[156px] flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch relative font-medium">
                      Share In
                    </div>
                    <div className="w-[127px] relative text-5xs inline-block">
                      Freelancer UI/UX Designer
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-5xs">
                    <div className="relative font-light inline-block min-w-[64px]">
                      June 2021 - Now
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative text-5xs font-light">
                  I'm currently running a freelancer job as a UI/UX Designer at
                  Share In. The work I do is Making visual designs for branding
                  purposes, compiling layouts, colors, and typography of the
                  interface, making user interface prototypes, High Fidelity
                  handouts to developers through Zeplin, doing research on user
                  experience, identifying and solving problems related to the
                  interface such as responsiveness , and create a theme for the
                  invitation website.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <div className="w-[156px] flex flex-col items-start justify-start gap-[5px]">
                    <div className="self-stretch relative font-medium">
                      Freelancer
                    </div>
                    <div className="relative text-5xs">{`UI/UX Designer, Excel, & Front-end`}</div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-5xs">
                    <div className="relative font-light inline-block min-w-[67px]">
                      April 2020 - Now
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative text-5xs font-light">
                  I am currently working as an open freelancer to do work
                  related to UI/UX Design, Front-end development, Excel, and
                  related to technology. For now, I'm doing freelance work on
                  Fiveer, but because it's difficult to find clients, the
                  distribution is done on various social media to reach more
                  customers. For now, I have made projects for excel, UI/UX
                  Designer and also Front-end.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default page

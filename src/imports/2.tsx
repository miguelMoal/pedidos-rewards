import svgPaths from "./svg-bkz9xtk901";
import imgImageWithFallback from "../assets/e4e0c17164a66349674cb9789c4d5acd7e753e51.png";
import imgImageWithFallback1 from "../assets/9e507b2c5c9e8ada93fe4d3adfbaa432e2290684.png";
import imgImageWithFallback2 from "../assets/4688925daf76a3361de541d15592f70eaef0be38.png";
import imgImageWithFallback3 from "../assets/10674549e1087c899d3be1c2a86eb79b2c46f6ae.png";

function ImageWithFallback() {
  return (
    <div className="h-[63.991px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function AppHeader() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] box-border content-stretch flex flex-col h-[89.088px] items-start left-0 pb-[1.108px] pt-[11.995px] px-[140.184px] top-[50px] w-[376.64px]" data-name="AppHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <ImageWithFallback />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[117.025px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.99px] items-start relative w-[117.025px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Revisa tu pedido</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[11.1px] size-[15.993px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_407)" id="Icon">
          <path d={svgPaths.p10d2a680} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
          <path d={svgPaths.p35083380} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
        </g>
        <defs>
          <clipPath id="clip0_1_407">
            <rect fill="white" height="15.9933" width="15.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[31.987px] relative rounded-[8px] shrink-0 w-[81.04px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.987px] relative w-[81.04px]">
        <Icon />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[33.08px] not-italic text-[14px] text-neutral-950 text-nowrap top-[3.99px] whitespace-pre">Editar</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[63.973px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[63.973px] items-center justify-between px-[15.993px] py-0 relative w-full">
          <Heading1 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[65.081px] relative shrink-0 w-[376.64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.108px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[65.081px] items-start pb-[1.108px] pt-0 px-0 relative w-[376.64px]">
        <Container />
      </div>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[79.984px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-gray-100 relative rounded-[14px] shrink-0 size-[79.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[79.984px]">
        <ImageWithFallback1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[23.99px] items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[16px]">Café del día</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-3px] whitespace-pre">$12.99</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33195 7.99667H12.6614" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gray-100 relative rounded-[3.71704e+07px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.987px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[31.987px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.99px] items-start relative w-[31.987px]">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[16px] text-center">2</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33195 7.99667H12.6614" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
          <path d="M7.99667 3.33195V12.6614" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#046741] relative rounded-[3.71704e+07px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.987px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[31.987px] items-center relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Text />
      <Button2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-[91.962px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.998px] h-[91.962px] items-start relative w-full">
        <Heading3 />
        <Paragraph />
        <Container3 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[46.613px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.99px] relative w-[46.613px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[47px] not-italic text-[#101828] text-[16px] text-nowrap text-right top-[-3px] translate-x-[-100%] whitespace-pre">$25.98</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[91.962px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[15.993px] h-[91.962px] items-start relative w-full">
          <Container2 />
          <Container4 />
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white h-[126.164px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.108px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[126.164px] items-start pb-[1.108px] pt-[17.101px] px-[17.101px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[79.984px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-gray-100 relative rounded-[14px] shrink-0 size-[79.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[79.984px]">
        <ImageWithFallback2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex h-[23.99px] items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[16px]">Concha de Vainilla</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-3px] whitespace-pre">$8.99</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_377)" id="Icon">
          <path d="M1.99917 3.99833H13.9942" id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
          <path d={svgPaths.p1359a80} id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
          <path d={svgPaths.p395af580} id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
          <path d="M6.66389 7.33028V11.3286" id="Vector_4" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
          <path d="M9.32945 7.33028V11.3286" id="Vector_5" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
        </g>
        <defs>
          <clipPath id="clip0_1_377">
            <rect fill="white" height="15.9933" width="15.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-gray-100 relative rounded-[3.71704e+07px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.987px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[31.987px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.99px] items-start relative w-[31.987px]">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[16px] text-center">1</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33195 7.99667H12.6614" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
          <path d="M7.99667 3.33195V12.6614" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#046741] relative rounded-[3.71704e+07px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.987px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[31.987px] items-center relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Text1 />
      <Button4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[91.962px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.998px] h-[91.962px] items-start relative w-full">
        <Heading4 />
        <Paragraph2 />
        <Container8 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[37.975px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.99px] relative w-[37.975px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[38px] not-italic text-[#101828] text-[16px] text-nowrap text-right top-[-3px] translate-x-[-100%] whitespace-pre">$8.99</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[91.962px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[15.993px] h-[91.962px] items-start relative w-full">
          <Container7 />
          <Container9 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[126.164px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.108px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[126.164px] items-start pb-[1.108px] pt-[17.101px] px-[17.101px] relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[79.984px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-gray-100 relative rounded-[14px] shrink-0 size-[79.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[79.984px]">
        <ImageWithFallback3 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex h-[23.99px] items-start overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[16px]">Burrito</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-3px] whitespace-pre">$3.99</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33195 7.99667H12.6614" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-gray-100 relative rounded-[3.71704e+07px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.987px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[31.987px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.99px] items-start relative w-[31.987px]">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[16px] text-center">2</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33195 7.99667H12.6614" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
          <path d="M7.99667 3.33195V12.6614" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#046741] relative rounded-[3.71704e+07px] shrink-0 size-[31.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.987px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[31.987px] items-center relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Text2 />
      <Button6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[91.962px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.998px] h-[91.962px] items-start relative w-full">
        <Heading5 />
        <Paragraph4 />
        <Container13 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[37.975px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.99px] relative w-[37.975px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[38px] not-italic text-[#101828] text-[16px] text-nowrap text-right top-[-3px] translate-x-[-100%] whitespace-pre">$7.98</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[91.962px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[15.993px] h-[91.962px] items-start relative w-full">
          <Container12 />
          <Container14 />
          <Paragraph5 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white h-[126.164px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.108px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[126.164px] items-start pb-[1.108px] pt-[17.101px] px-[17.101px] relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[376.64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[15.993px] h-full items-start pb-0 pt-[23.99px] px-[15.993px] relative w-[376.64px]">
        <Container6 />
        <Container11 />
        <Container16 />
      </div>
    </div>
  );
}

function OrderConfirmation() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[851.87px] items-start left-0 pb-[319.988px] pt-0 px-0 top-[139.09px] w-[376.64px]" data-name="OrderConfirmation">
      <Container1 />
      <Container17 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f8f9fa] h-[1025.03px] left-0 top-0 w-[376.64px]" data-name="App">
      <AppHeader />
      <OrderConfirmation />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[59.196px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.99px] items-start relative w-[59.196px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Subtotal</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[46.613px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.99px] relative w-[46.613px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-3px] whitespace-pre">$42.95</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[23.99px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[38.062px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.99px] items-start relative w-[38.062px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap whitespace-pre">Envío</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[37.975px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.99px] relative w-[37.975px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-3px] whitespace-pre">$2.50</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[23.99px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container20() {
  return <div className="bg-gray-200 h-[0.987px] shrink-0 w-full" data-name="Container" />;
}

function Text7() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[33.631px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.99px] items-start relative w-[33.631px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Total</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[46.613px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.99px] relative w-[46.613px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-3px] whitespace-pre">$45.45</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[23.99px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[96.947px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[39.983px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-2px] w-[322px]">Puedes modificar o agregar más productos antes de pagar.</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#046741] h-[47.997px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[133.99px] not-italic text-[14px] text-nowrap text-white top-[12px] whitespace-pre">Ir a pagar →</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[117.6px] size-[15.993px] top-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_403)" id="Icon">
          <path d={svgPaths.p10d2a680} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
          <path d={svgPaths.p1d1e3500} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33278" />
        </g>
        <defs>
          <clipPath id="clip0_1_403">
            <rect fill="white" height="15.9933" width="15.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white h-[47.997px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.108px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon7 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[141.59px] not-italic text-[14px] text-neutral-950 text-nowrap top-[12px] whitespace-pre">Editar pedido</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[7.997px] h-[103.991px] items-start relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[304.895px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[15.993px] h-[304.895px] items-start pb-0 pt-[15.993px] px-[15.993px] relative w-full">
          <Container22 />
          <Paragraph6 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function OrderConfirmation1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[306.002px] items-start left-0 pb-0 pt-[1.108px] px-0 top-[523px] w-[376.64px]" data-name="OrderConfirmation">
      <div aria-hidden="true" className="absolute border-[1.108px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container24 />
    </div>
  );
}

export default function Component2() {
  return (
    <div className="bg-white relative size-full" data-name="2">
      <App />
      <OrderConfirmation1 />
    </div>
  );
}
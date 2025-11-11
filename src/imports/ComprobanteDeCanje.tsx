import svgPaths from "./svg-r8trpdmxix";
import imgImageWithFallback from "../assets/f69f3e1f121b1ab153665276e885092f953e390c.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p33f6b680} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15.8333 10H4.16667" id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Volver</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[24px] relative shrink-0 w-[71.766px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[71.766px]">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3.35544e+07px] size-full" src={imgImageWithFallback} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Puesto Rewards</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">Confirmar Canje</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-start relative w-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[163.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[163.297px]">
        <ImageWithFallback />
        <Container />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-0 relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-0 w-[64px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[89px] relative shrink-0 w-[1558px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[89px] items-start pb-px pt-[24px] px-[139px] relative w-[1558px]">
        <Container3 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[20px] size-[40px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p19a01780} id="Vector" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p24376300} id="Vector_2" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(4,103,65,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[80px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[590px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[295px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">¡Recompensas listas!</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[590px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[295.08px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Escanea este código en caja para canjear</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
      <Container5 />
      <Frame />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Recompensas a canjear:</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pc4ad940} id="Vector" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667V17.5" id="Vector_2" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24a96bc0} id="Vector_3" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p19b8b5d0} id="Vector_4" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(4,103,65,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Café Premium</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[40px] relative shrink-0 w-[151.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[151.188px]">
        <Container6 />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[58.281px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#046741] text-[16px] text-nowrap top-[-2px] whitespace-pre">-3 visitas</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white h-[66px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[66px] items-center justify-between px-[17px] py-px relative w-full">
          <Container7 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex flex-col gap-[12px] h-[354px] items-start pb-0 pt-[20px] px-[20px] relative rounded-[14px] shrink-0 w-[590px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph2 />
      <Container8 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p33f6b680} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15.8333 10H4.16667" id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[67.016px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Modificar</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative size-full">
          <Icon3 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_22_949)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_22_949">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[164.141px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">Marcar como Canjeado</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_2] bg-[#046741] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
          <Icon4 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[56px] relative shrink-0 w-[590px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] h-[700px] items-center pb-px pt-[33px] px-[33px] relative rounded-[16px] shrink-0 w-[672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Frame1 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1558px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-center justify-center overflow-clip pl-[435.5px] pr-[450.5px] py-0 relative rounded-[inherit] w-[1558px]">
        <Container11 />
      </div>
    </div>
  );
}

export default function ComprobanteDeCanje() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="comprobante de canje">
      <Container4 />
      <Container12 />
    </div>
  );
}
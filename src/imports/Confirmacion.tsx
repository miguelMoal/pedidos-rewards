import svgPaths from "./svg-hggqeqprd5";
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
    <div className="absolute bg-[rgba(4,103,65,0.1)] left-[296px] rounded-[3.35544e+07px] size-[80px] top-[41px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#046741] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Icon1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[24px] left-[41px] top-[145px] w-[590px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[295.2px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">¡Recompensas Listas!</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[41px] top-[177px] w-[590px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[295.08px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Escanea este código en caja para canjear</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[25px] size-[200px] top-[25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 200">
        <g clipPath="url(#clip0_22_953)" id="Icon">
          <path d="M200 0H0V200H200V0Z" fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d="M80 20H20V80H80V20Z" fill="var(--fill-0, #101828)" id="Vector_2" />
            <path d="M180 20H120V80H180V20Z" fill="var(--fill-0, #101828)" id="Vector_3" />
            <path d="M80 120H20V180H80V120Z" fill="var(--fill-0, #101828)" id="Vector_4" />
            <path d="M70 30H30V70H70V30Z" fill="var(--fill-0, white)" id="Vector_5" />
            <path d="M170 30H130V70H170V30Z" fill="var(--fill-0, white)" id="Vector_6" />
            <path d="M70 130H30V170H70V130Z" fill="var(--fill-0, white)" id="Vector_7" />
            <path d="M100 25H90V35H100V25Z" fill="var(--fill-0, #101828)" id="Vector_8" />
            <path d="M100 45H90V55H100V45Z" fill="var(--fill-0, #101828)" id="Vector_9" />
            <path d="M100 65H90V75H100V65Z" fill="var(--fill-0, #101828)" id="Vector_10" />
            <path d="M120 85H110V95H120V85Z" fill="var(--fill-0, #101828)" id="Vector_11" />
            <path d="M140 85H130V95H140V85Z" fill="var(--fill-0, #101828)" id="Vector_12" />
            <path d="M160 85H150V95H160V85Z" fill="var(--fill-0, #101828)" id="Vector_13" />
            <path d="M100 105H90V115H100V105Z" fill="var(--fill-0, #101828)" id="Vector_14" />
            <path d="M120 105H110V115H120V105Z" fill="var(--fill-0, #101828)" id="Vector_15" />
            <path d="M160 105H150V115H160V105Z" fill="var(--fill-0, #101828)" id="Vector_16" />
            <path d="M100 125H90V135H100V125Z" fill="var(--fill-0, #101828)" id="Vector_17" />
            <path d="M140 125H130V135H140V125Z" fill="var(--fill-0, #101828)" id="Vector_18" />
            <path d="M100 145H90V155H100V145Z" fill="var(--fill-0, #101828)" id="Vector_19" />
            <path d="M120 145H110V155H120V145Z" fill="var(--fill-0, #101828)" id="Vector_20" />
            <path d="M140 145H130V155H140V145Z" fill="var(--fill-0, #101828)" id="Vector_21" />
            <path d="M160 145H150V155H160V145Z" fill="var(--fill-0, #101828)" id="Vector_22" />
            <path d="M100 165H90V175H100V165Z" fill="var(--fill-0, #101828)" id="Vector_23" />
            <path d="M120 165H110V175H120V165Z" fill="var(--fill-0, #101828)" id="Vector_24" />
            <path d="M160 165H150V175H160V165Z" fill="var(--fill-0, #101828)" id="Vector_25" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_22_953">
            <rect fill="white" height="200" width="200" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white left-[170px] rounded-[14px] size-[250px] top-[34px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex h-[56px] items-start left-[187.23px] px-[16px] py-[12px] rounded-[10px] top-[306px] w-[215.516px]" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-center text-nowrap tracking-[2.4px] whitespace-pre">RWD18099701</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[396px] left-[41px] rounded-[16px] top-[233px] w-[590px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(4,103,65,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container6 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Recompensas a canjear:</p>
    </div>
  );
}

function Icon3() {
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

function Container8() {
  return (
    <div className="bg-[rgba(4,103,65,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Bolsa Reutilizable</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[40px] relative shrink-0 w-[174.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[174.328px]">
        <Container8 />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[58.281px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#046741] text-[16px] top-[-2px] w-[59px]">-150 pts</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white h-[66px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[66px] items-center justify-between px-[17px] py-px relative w-full">
          <Container9 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[33.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[33.641px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">Total</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[96.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[96.484px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#046741] text-[18px] top-[-1px] w-[97px]">-150 puntos</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-center justify-between pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col gap-[12px] h-[191px] items-start left-[41px] pb-0 pt-[20px] px-[20px] rounded-[14px] top-[653px] w-[590px]" data-name="Container">
      <Paragraph3 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Icon4() {
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

function Text5() {
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
          <Icon4 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
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

function Text6() {
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
          <Icon5 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[56px] left-[41px] top-[868px] w-[590px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[965px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container5 />
      <Heading1 />
      <Paragraph1 />
      <Container7 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1558px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip pb-0 pl-[435.5px] pr-[450.5px] relative rounded-[inherit] w-[1558px]">
        <Container14 />
      </div>
    </div>
  );
}

function RegisterSale() {
  return (
    <div className="absolute bg-[#f8f9fa] content-stretch flex flex-col h-[944px] items-start left-0 top-0 w-[1558px]" data-name="RegisterSale">
      <Container4 />
      <Container15 />
    </div>
  );
}

function Icon6() {
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

function Container16() {
  return (
    <div className="absolute bg-[rgba(4,103,65,0.1)] left-[247px] rounded-[3.35544e+07px] size-[80px] top-0" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-0 top-[104px] w-[574px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[287.06px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">¡Recompensas Canjeadas!</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[24px] left-0 top-[140px] w-[574px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[287.67px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">¿Qué deseas hacer ahora?</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Heading2 />
      <Paragraph4 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1e533000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 10H22" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[172.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[172.609px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-nowrap text-white top-[-1px] whitespace-pre">Registrar una Compra</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#046741] h-[80px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[80px] items-center justify-center pl-0 pr-[0.016px] py-0 relative w-full">
          <Icon7 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p15a56410} id="Vector" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 8V21" id="Vector_2" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pb845c00} id="Vector_3" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p31fb2b00} id="Vector_4" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[211.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[211.141px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-[-1px] whitespace-pre">Canjear más Recompensas</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[80px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[80px] items-center justify-center pl-[2px] pr-[2.016px] py-[2px] relative w-full">
          <Icon8 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[176.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[176.453px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">Finalizar y volver al Inicio</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[56px] items-center justify-center pl-0 pr-[0.016px] py-0 relative w-full">
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[256px] items-start relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white h-[558px] relative rounded-[16px] shrink-0 w-[672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[558px] items-center pb-px pt-[33px] px-[33px] relative w-[672px]">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function RegisterSale1() {
  return (
    <div className="absolute bg-[#f8f9fa] content-stretch flex h-[944px] items-center justify-center left-0 top-0 w-[1558px]" data-name="RegisterSale">
      <Container19 />
    </div>
  );
}

export default function Confirmacion() {
  return (
    <div className="bg-white relative size-full" data-name="confirmación">
      <RegisterSale />
      <RegisterSale1 />
    </div>
  );
}
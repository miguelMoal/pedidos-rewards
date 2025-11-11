import svgPaths from "./svg-itsukjc08p";
import imgImageWithFallback from "../assets/d320e008bd3b0133ec25b9628d3871111ca98fa7.png";

function ImageWithFallback() {
  return (
    <div className="h-[64px] relative shrink-0 w-[95.625px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageWithFallback} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[64px] w-[95.625px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">Puesto Rewards</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#046741] text-[14px]">Sistema de Lealtad</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[52px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[52px] items-start relative w-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[278.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[64px] items-center relative w-[278.578px]">
        <ImageWithFallback />
        <Container />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pc8ce200} id="Vector_3" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">Historial</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[38px] relative rounded-[10px] shrink-0 w-[113px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[38px] items-center px-[17px] py-px relative w-[113px]">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[113px] relative shrink-0 w-[1558px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[113px] items-start pb-px pt-[24px] px-[203px] relative w-[1558px]">
        <Container2 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-[512.63px] not-italic text-[#101828] text-[30px] text-center text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">¡Bienvenido!</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[512.13px] not-italic text-[#4a5565] text-[18px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">¿Qué deseas hacer hoy?</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72px] items-start left-0 top-0 w-[1024px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Container5() {
  return <div className="absolute h-[272px] left-[2px] opacity-0 top-[2px] w-[492px]" data-name="Container" />;
}

function Icon1() {
  return (
    <div className="h-[64px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 22">
            <path d={svgPaths.p1d7cb90} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
            <path d={svgPaths.p479d880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_20.83%_41.67%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-2.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 22">
            <path d="M2.66667 2.66667V18.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_8.33%_54.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-2.67px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 6">
            <path d="M18.6667 2.66667H2.66667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#046741] grow min-h-px min-w-px relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#035230] w-[112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[24px] px-[24px] relative w-[112px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[20px] text-center">Nuevo Cliente</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap whitespace-pre">Regístrate y comienza a acumular puntos</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[56px] relative shrink-0 w-[253.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[56px] items-start relative w-[253.391px]">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[192px] items-center left-[42px] top-[42px] w-[412px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[16px] shrink-0" data-name="Button">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container5 />
        <Container8 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container9() {
  return <div className="absolute h-[272px] left-[2px] opacity-0 top-[2px] w-[492px]" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="h-[64px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 43">
            <path d={svgPaths.p3e21c200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_58.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-2.67px_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 6">
            <path d="M2.66667 2.66667H56" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#046741] grow min-h-px min-w-px relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#035230] w-[112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[24px] px-[24px] relative w-[112px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[20px] text-center">Registrar Puntos</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap whitespace-pre">Acumula o canjea tus puntos</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[56px] relative shrink-0 w-[178.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[56px] items-start relative w-[178.391px]">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[192px] items-center left-[42px] top-[42px] w-[412px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[16px] shrink-0" data-name="Button">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container9 />
        <Container12 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[276px] left-0 top-[120px] w-[1024px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container14() {
  return <div className="absolute bg-[#046741] left-[25px] opacity-[0.912] rounded-[3.35544e+07px] size-[8px] top-[19px]" data-name="Container" />;
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[41px] top-[13px] w-[301.812px]" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap whitespace-pre">Gana 1 punto por cada $10 MXN en tus compras</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] h-[46px] left-[328.09px] rounded-[3.35544e+07px] top-[444px] w-[367.812px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Container14 />
      <Paragraph6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[490px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[490px] relative w-[1024px]">
        <Container4 />
        <Container13 />
        <Container15 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1558px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center overflow-clip relative rounded-[inherit] w-[1558px]">
        <Container16 />
      </div>
    </div>
  );
}

export default function Inicio() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="inicio" style={{ backgroundImage: "linear-gradient(rgb(248, 249, 250) 0%, rgb(248, 249, 250) 50%, rgb(232, 245, 241) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container3 />
      <Container17 />
    </div>
  );
}
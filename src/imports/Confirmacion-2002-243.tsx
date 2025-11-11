import svgPaths from "./svg-2zrjqturdd";
import imgImageWithFallback from "../assets/f69f3e1f121b1ab153665276e885092f953e390c.png";

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
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">Terminal de Venta</p>
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
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[89px] items-start left-0 pb-px pl-[697.344px] pr-[697.359px] pt-[24px] top-0 w-[1558px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Icon">
          <path d={svgPaths.p1b47d580} id="Vector" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
          <path d={svgPaths.pffc74c0} id="Vector_2" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(4,103,65,0.1)] content-stretch flex items-center justify-center left-[206.75px] rounded-[3.35544e+07px] size-[96px] top-[65px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[190px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">¡Recompensas Canjeadas!</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 top-[-48px] w-[379.516px]">
      <Heading1 />
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-center w-full">Regresando al menú en 15 segundos...</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[65px] top-[241px] w-[379.516px]" data-name="Paragraph">
      <Frame />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[118.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[118.578px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[59px] not-italic text-[18px] text-center text-nowrap text-white top-[-1px] translate-x-[-50%] whitespace-pre">Volver al Menú</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#046741] box-border content-stretch flex h-[64px] items-center justify-center left-[147.77px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[297px] w-[214.578px]" data-name="Button">
      <Text />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white h-[426px] left-[524.23px] rounded-[16px] top-[303.5px] w-[509.516px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container3 />
      <Paragraph1 />
      <Button />
    </div>
  );
}

function Confirmation() {
  return (
    <div className="bg-[#f8f9fa] h-[1001px] relative shrink-0 w-full" data-name="Confirmation">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Section() {
  return <div className="h-0 shrink-0 w-full" data-name="Section" />;
}

function Tl() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1001px] items-start left-0 top-0 w-[1558px]" data-name="tl">
      <Confirmation />
      <Section />
    </div>
  );
}

export default function Confirmacion() {
  return (
    <div className="bg-white relative size-full" data-name="confirmación">
      <Tl />
    </div>
  );
}
import svgPaths from "./svg-u1zgl81pzo";
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
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">Nuevo Cliente</p>
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

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.406px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start w-[37.406px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container1 />
      <Button1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[89px] relative shrink-0 w-[1558px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[89px] items-start pb-px pt-[24px] px-[139px] relative w-[1558px]">
        <Container2 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Nombre Completo *</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Juan García</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[86px] items-start pb-px pt-[17px] px-[17px] relative rounded-[14px] shrink-0 w-[658.656px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Label />
      <Container4 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Teléfono * (Verificado)</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">5551234567</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex flex-col gap-[8px] h-[86px] items-start pb-px pt-[17px] px-[17px] relative rounded-[14px] shrink-0 w-[658.656px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Label1 />
      <Container5 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Género *</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[71.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[71.922px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[36.5px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Masculino</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(4,103,65,0.05)] box-border content-stretch flex h-[58px] items-center justify-center left-0 p-px rounded-[14px] top-0 w-[211.547px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#046741] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[69.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[69.688px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[35px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Femenino</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute box-border content-stretch flex h-[58px] items-center justify-center left-[223.55px] pl-px pr-[1.016px] py-px rounded-[14px] top-0 w-[211.547px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[32.422px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Otro</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute box-border content-stretch flex h-[58px] items-center justify-center left-[447.09px] p-px rounded-[14px] top-0 w-[211.547px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[58px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[658.656px]" data-name="Container">
      <Label2 />
      <Container6 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115.812px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[115.812px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Código de tu tarjeta rewards (Ingresa el número o escanea) *</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pf942a70} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3de9ee00} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pbdf4440} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1fb905c0} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Icon1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">9876543210987</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[86px] items-start pb-px pt-[17px] px-[17px] relative rounded-[14px] shrink-0 w-[658.656px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">¿Trabajas para el polígono federal?</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[71.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[71.922px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[36.5px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Si</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 bg-[rgba(4,103,65,0.05)] box-border content-stretch flex gap-[8px] grow h-[58px] items-center justify-center min-h-px min-w-px p-px relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#046741] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[69.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[69.688px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[35.36px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">No</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 grow h-[58px] min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[58px] items-center justify-center pl-px pr-[1.016px] py-px relative w-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[658.656px]" data-name="Container">
      <Label4 />
      <Container10 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115.812px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[115.812px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Oficina</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label5 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Ingresa la oficina a la que perteneces</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] h-[86px] items-start pb-px pt-[17px] px-[17px] relative rounded-[14px] shrink-0 w-[658.656px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Container11 />
      <Button10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] items-start relative">
        <Button2 />
        <Button3 />
        <Container7 />
        <Button7 />
        <Frame1 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[129.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[129.938px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[65.14px] not-italic text-[18px] text-center text-nowrap text-white top-[-0.31px] translate-x-[-50%] whitespace-pre">Registrar cliente</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#046741] h-[64px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[658.656px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[64px] items-center justify-center relative w-[658.656px]">
        <Text6 />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col h-[773.312px] items-start justify-between relative shrink-0 w-full" data-name="Form">
      <Frame />
      <Button11 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[823.312px] relative rounded-[16px] shrink-0 w-[708.656px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[823.312px] items-start overflow-clip pb-px pt-[25px] px-[25px] relative rounded-[inherit] w-[708.656px]">
        <Form />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Ingresando:</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px] whitespace-pre">Selecciona un campo</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-gray-100 h-[80px] relative rounded-[14px] shrink-0 w-[449.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[80px] items-start pb-0 pt-[16px] px-[16px] relative w-[449.328px]">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[153.33px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[306.66px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">3</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[141.328px] relative shrink-0 w-full" data-name="Container">
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">4</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[153.33px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">5</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[306.66px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">6</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[141.328px] relative shrink-0 w-full" data-name="Container">
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">7</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[153.33px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">8</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[306.66px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">9</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[141.328px] relative shrink-0 w-full" data-name="Container">
      <Button18 />
      <Button19 />
      <Button20 />
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">.</p>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[153.33px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p2955ef00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 10.5L21 17.5" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M21 10.5L14 17.5" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex items-center justify-center left-[306.66px] pl-0 pr-[0.016px] py-0 rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[141.328px] relative shrink-0 w-full" data-name="Container">
      <Button21 />
      <Button22 />
      <Button23 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M15 5L5 15" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 5L15 15" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[52.172px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Limpiar</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-white h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center pl-px pr-[1.016px] py-px relative w-full">
          <Icon3 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function NumericKeypad() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[448px]" data-name="NumericKeypad">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-full items-start relative w-[448px]">
        <Container16 />
        <Container17 />
        <Container18 />
        <Container19 />
        <Button24 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] h-[823.312px] items-start pl-[25px] pr-px py-[25px] relative rounded-[16px] shrink-0 w-[499.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container15 />
      <NumericKeypad />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1558px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip pb-0 pt-[24px] px-[163px] relative rounded-[inherit] w-[1558px]">
        <Container21 />
      </div>
    </div>
  );
}

export default function InterfazDeTerminalDeVenta() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="Interfaz de Terminal de Venta">
      <Container3 />
      <Container22 />
    </div>
  );
}
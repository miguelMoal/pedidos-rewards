import svgPaths from "./svg-sxnr60g1e6";
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
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">Verificación de Teléfono</p>
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
    <div className="h-[40px] relative shrink-0 w-[177.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[177.734px]">
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

function Icon1() {
  return (
    <div className="absolute left-[20px] size-[40px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p31488780} id="Vector" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute left-[216px] rounded-[3.35544e+07px] size-[80px] top-[41px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(4,103,65,0.2)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Icon1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[24px] left-[41px] top-[145px] w-[430px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[215.2px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Verifica tu número</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[41px] top-[177px] w-[430px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[214.98px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Ingresa el código de 4 dígitos enviado a</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-[41px] top-[209px] w-[430px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[214.88px] not-italic text-[#046741] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">5551234567</p>
    </div>
  );
}

function InputOtpSlot() {
  return (
    <div className="absolute bg-[#f3f3f5] left-0 rounded-bl-[8px] rounded-br-[14px] rounded-tl-[8px] rounded-tr-[14px] size-[64px] top-0" data-name="InputOTPSlot">
      <div aria-hidden="true" className="absolute border-[2px_2px_2px_1px] border-gray-200 border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[14px] rounded-tl-[8px] rounded-tr-[14px]" />
    </div>
  );
}

function InputOtpSlot1() {
  return (
    <div className="absolute bg-[#f3f3f5] left-[76px] rounded-[14px] size-[64px] top-0" data-name="InputOTPSlot">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function InputOtpSlot2() {
  return (
    <div className="absolute bg-[#f3f3f5] left-[152px] rounded-[14px] size-[64px] top-0" data-name="InputOTPSlot">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function InputOtpSlot3() {
  return (
    <div className="absolute bg-[#f3f3f5] left-[228px] rounded-bl-[14px] rounded-br-[8px] rounded-tl-[14px] rounded-tr-[8px] size-[64px] top-0" data-name="InputOTPSlot">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[8px] rounded-tl-[14px] rounded-tr-[8px]" />
    </div>
  );
}

function InputOtpGroup() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[292px]" data-name="InputOTPGroup">
      <InputOtpSlot />
      <InputOtpSlot1 />
      <InputOtpSlot2 />
      <InputOtpSlot3 />
    </div>
  );
}

function TextInput() {
  return <div className="absolute h-[64px] left-0 top-0 w-[292px]" data-name="Text Input" />;
}

function Input() {
  return (
    <div className="absolute h-[64px] left-[110px] top-[265px] w-[292px]" data-name="Input">
      <InputOtpGroup />
      <TextInput />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19987d80} id="Vector" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 2V5.33333H10.6667" id="Vector_2" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 10.6667H2V14" id="Vector_4" stroke="var(--stroke-0, #046741)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#046741] text-[14px] text-nowrap whitespace-pre">No recibí el código, reenviar</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Button">
      <Icon2 />
      <Text1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[37px] items-start left-[41px] pb-0 pl-[116.141px] pr-[116.156px] pt-[17px] top-[353px] w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Button2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white h-[431px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container4 />
      <Heading1 />
      <Paragraph1 />
      <Paragraph2 />
      <Input />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[463px] items-start left-[98.33px] top-[172px] w-[512px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[209.36px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Ingresa el código de verificación</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-gray-50 h-[56px] relative rounded-[14px] shrink-0 w-[449.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[56px] items-start pb-0 pt-[16px] px-[16px] relative w-[449.328px]">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[153.33px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[306.66px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">3</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[141.328px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">4</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[153.33px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">5</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[306.66px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">6</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[141.328px] relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">7</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[153.33px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">8</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[306.66px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">9</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[141.328px] relative shrink-0 w-full" data-name="Container">
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">.</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[153.33px] p-px rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function Icon3() {
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

function Button14() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex items-center justify-center left-[306.66px] pl-0 pr-[0.016px] py-0 rounded-[12px] size-[141.328px] top-0" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[141.328px] relative shrink-0 w-full" data-name="Container">
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Icon4() {
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

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[52.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[52.172px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Limpiar</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center pl-px pr-[1.016px] py-px relative w-full">
          <Icon4 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function NumericKeypad() {
  return (
    <div className="h-[669.312px] relative shrink-0 w-[448px]" data-name="NumericKeypad">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[669.312px] items-start relative w-[448px]">
        <Container9 />
        <Container10 />
        <Container11 />
        <Container12 />
        <Button15 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[27.844px] h-[807px] items-start left-[732.66px] pb-px pl-[25px] pr-px pt-[25px] rounded-[16px] top-0 w-[499.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container8 />
      <NumericKeypad />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[807px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1558px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip pb-0 pt-[24px] px-[163px] relative rounded-[inherit] w-[1558px]">
        <Container14 />
      </div>
    </div>
  );
}

export default function InterfazDeTerminalDeVenta() {
  return (
    <div className="bg-[#f8f9fa] content-stretch flex flex-col items-start relative size-full" data-name="Interfaz de Terminal de Venta">
      <Container3 />
      <Container15 />
    </div>
  );
}
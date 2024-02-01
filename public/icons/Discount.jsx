import * as React from "react";

function Discount(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M13.951 2.716l.182.17.72.72c.246.245.57.396.914.43l.15.008h1.027a3.013 3.013 0 013.007 2.835l.005.177v1.027c0 .35.12.686.338.953l.1.11.718.72a3.012 3.012 0 01.146 4.114l-.136.145-.728.729c-.245.245-.396.57-.43.913l-.008.149v1.029a3.012 3.012 0 01-2.835 3.006l-.177.005h-1.028c-.348 0-.685.12-.953.34l-.11.099-.718.716a3.01 3.01 0 01-4.115.146l-.154-.144-.717-.717a1.515 1.515 0 00-.917-.433l-.148-.007H7.055a3.011 3.011 0 01-3.006-2.834l-.005-.177v-1.03c0-.347-.121-.684-.34-.951l-.099-.11-.717-.718a3.011 3.011 0 01-.146-4.116l.136-.145.726-.727c.247-.248.399-.572.433-.917l.007-.148V7.056l.005-.177a3.013 3.013 0 012.83-2.83l.176-.005h1.03c.348 0 .684-.121.951-.338l.11-.1.719-.718c1.126-1.132 2.928-1.182 4.086-.172zm-2.91 1.127l-.114.104-.721.722a3.012 3.012 0 01-1.924.868l-.198.007H7.055c-.787 0-1.435.604-1.505 1.374l-.006.138v1.027c0 .729-.264 1.43-.742 1.978l-.135.146-.727.728a1.51 1.51 0 00-.097 2.024l.105.115.72.72c.513.516.822 1.201.87 1.924l.006.198v1.029c0 .788.604 1.435 1.374 1.505l.137.006h1.03c.727 0 1.429.265 1.977.742l.145.136.724.723a1.512 1.512 0 002.027.1l.115-.105.721-.72a3.01 3.01 0 011.924-.87l.198-.006h1.028c.789 0 1.436-.604 1.506-1.374l.006-.137v-1.03c0-.728.265-1.431.742-1.977l.135-.145.727-.727c.552-.555.584-1.43.097-2.024l-.104-.115-.722-.722a3.01 3.01 0 01-.868-1.924l-.007-.198V7.056c0-.789-.604-1.436-1.374-1.506l-.138-.006h-1.028c-.73 0-1.431-.265-1.978-.742l-.145-.135-.688-.69-.04-.037a1.512 1.512 0 00-2.024-.097zm4.056 10.2c.07.07.13.15.17.24.03.09.05.19.05.29 0 .1-.02.19-.05.28-.04.09-.1.18-.17.25a.75.75 0 01-1.06 0 .821.821 0 01-.16-.25.717.717 0 010-.57c.04-.09.09-.17.16-.24.28-.28.78-.28 1.06 0zm.003-5.144a.75.75 0 01.073.977l-.073.084-5.14 5.14a.75.75 0 01-1.133-.977l.072-.084 5.14-5.14a.75.75 0 011.061 0zm-5.144.004c.14.139.22.33.22.53 0 .1-.01.189-.05.28-.04.09-.1.17-.17.25a.773.773 0 01-.53.22c-.1 0-.19-.021-.28-.061a.818.818 0 01-.25-.16.963.963 0 01-.16-.25.714.714 0 010-.57c.04-.09.09-.18.16-.24a.772.772 0 011.06 0z"
        fill="#EA7C69"
      />
    </svg>
  );
}

const MemoDiscount = React.memo(Discount);
export default MemoDiscount;

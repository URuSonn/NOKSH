import { keyframes } from "@emotion/react";

//   const spinText = keyframes`70%{transform:rotateX(0deg)}100%{transform:rotateX(360deg)}`;

export function UsingFunction() {
  return (
    <div>
      <div style={{ minWidth: "400px", textAlign: "center" }}>
        <style>
          {`
                .SpinText { 
                    display:flex;
                    justify-content:right;
                    font-Size: 1rem;
                    gap:5px;
                }
                .SpinText span{
                    font-weight:bold;
                    animation: rotateText 6s infinite;
                    text-transform :uppercase;
                    color:gray;
                }

                .SpinText span:nth-child(2){
                    animation-delay:0.1s;
                }
                .SpinText span:nth-child(3){
                    animation-delay:0.2s;
                }
                .SpinText span:nth-child(4){
                    animation-delay:0.3s;
                }
                .SpinText span:nth-child(5){
                    animation-delay:0.4s;
                }
                .SpinText span:nth-child(6){
                    animation-delay:0.5s;
                }
                .SpinText span:nth-child(7){
                    animation-delay:0.6s;
                }
                .SpinText span:nth-child(8){
                    animation-delay:0.7s;
                }
                .SpinText span:nth-child(9){
                    animation-delay:0.8s;
                }
                .SpinText span:nth-child(10){
                    animation-delay:0.9s;
                }
                .SpinText span:nth-child(11){
                    animation-delay:1s;
                }
                .SpinText span:nth-child(12){
                    animation-delay:1.1s;
                }
                .SpinText span:nth-child(13){
                    animation-delay:1.2s;
                }
                .SpinText span:nth-child(14){
                    animation-delay:1.3s;
                }
                .SpinText span:nth-child(15){
                    animation-delay:1.4s;
                }
                .SpinText span:nth-child(16){
                    
                    animation-delay:1.5s;
                }
                .SpinText span:nth-child(17){
                    animation-delay:1.6s;
                }
                .SpinText span:nth-child(18){
                    animation-delay:1.7s;
                }
                .SpinText span:nth-child(19){
                    animation-delay:1.8s;
                }
                .SpinText span:nth-child(20){
                    animation-delay:1.9s;
                }

                @keyframes rotateText {
                    9%{transform:scale(1);color:lightblue;}
                    80%{transform:rotateX(0deg);}
                    100%{transform:rotateX(360deg);
                    }
                }
             
                
            `}
        </style>
        <div className="SpinText">
          <span className="R">R</span>
          <span>E</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
          <span>-</span>
          <span>N</span>
          <span>E</span>
          <span>X</span>
          <span>T</span>
          <span>.</span>
          <span>J</span>
          <span>S</span>
          <span>-</span>
          <span>V</span>
          <span>E</span>
          <span>R</span>
          <span>C</span>
          <span>E</span>
          <span>L</span>
        </div>
      </div>
    </div>
  );
}

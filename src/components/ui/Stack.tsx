"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from  "../../utils/cn";
import { BsBootstrap } from "react-icons/bs";


export function Stack() {
  return (
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <Tailwind className="h-4 w-4 " />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <Node className="h-6 w-6 dark:text-white" />
        </Container>
        <Container className="circle-3">
          <Reactjs className="h-10 w-10 " />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <MUI className="h-10 w-6 " />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <BsBootstrap className="h-8 w-8 dark:text-white" />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};



export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[7rem] md:h-[10rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
export const Reactjs = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65 32.5057C65 28.7268 59.6076 25.1456 51.3402 22.9247C53.2481 15.5297 52.4001 9.64625 48.6639 7.76261C47.8027 7.32077 46.7958 7.11148 45.6961 7.11148V9.70439C46.3055 9.70439 46.7958 9.80904 47.2065 10.0067C49.0084 10.9136 49.7901 14.367 49.1806 18.8086C49.0349 19.9016 48.7964 21.0527 48.5049 22.2271C45.9081 21.669 43.0728 21.2388 40.0917 20.9597C38.3031 18.8086 36.4482 16.8552 34.5801 15.146C38.8993 11.6229 42.9535 9.69276 45.7093 9.69276V7.09985C42.0658 7.09985 37.2962 9.37882 32.4735 13.3321C27.6508 9.40208 22.8812 7.14636 19.2377 7.14636V9.73927C21.9802 9.73927 26.0477 11.6578 30.3669 15.1576C28.512 16.8669 26.6572 18.8086 24.895 20.9597C21.9007 21.2388 19.0654 21.669 16.4686 22.2387C16.1639 21.076 15.9386 19.9481 15.7797 18.8668C15.1569 14.4251 15.9254 10.9718 17.714 10.0532C18.1115 9.84392 18.6282 9.7509 19.2377 9.7509V7.15799C18.1247 7.15799 17.1178 7.36728 16.2434 7.80912C12.5204 9.69276 11.6857 15.5646 13.6068 22.9364C5.36588 25.1688 0 28.7384 0 32.5057C0 36.2846 5.39238 39.8659 13.6598 42.0867C11.7519 49.4817 12.5999 55.3652 16.3361 57.2488C17.1973 57.6906 18.2042 57.8999 19.3172 57.8999C22.9607 57.8999 27.7303 55.621 32.553 51.6677C37.3757 55.5977 42.1453 57.8534 45.7888 57.8534C46.9017 57.8534 47.9087 57.6441 48.7831 57.2023C52.5061 55.3187 53.3408 49.4468 51.4197 42.0751C59.6341 39.8542 65 36.273 65 32.5057ZM47.7497 24.7502C47.2595 26.2502 46.65 27.7966 45.9611 29.3431C45.4179 28.4129 44.8481 27.4827 44.2254 26.5525C43.616 25.6223 42.9668 24.7154 42.3176 23.8317C44.1989 24.0758 46.0141 24.3782 47.7497 24.7502ZM41.6816 37.1334C40.6482 38.7031 39.5883 40.1914 38.4886 41.5751C36.5145 41.7262 34.5139 41.8076 32.5 41.8076C30.4994 41.8076 28.4988 41.7262 26.5379 41.5867C25.4382 40.203 24.3651 38.7264 23.3316 37.1683C22.3247 35.6451 21.4105 34.0987 20.5758 32.5406C21.3973 30.9825 22.3247 29.4244 23.3184 27.9013C24.3518 26.3316 25.4117 24.8433 26.5114 23.4596C28.4855 23.3084 30.4861 23.227 32.5 23.227C34.5006 23.227 36.5012 23.3084 38.4621 23.448C39.5618 24.8316 40.6349 26.3083 41.6684 27.8664C42.6753 29.3896 43.5895 30.936 44.4242 32.4941C43.5895 34.0522 42.6753 35.6102 41.6816 37.1334ZM45.9611 35.6219C46.6765 37.1799 47.286 38.738 47.7894 40.2496C46.0538 40.6216 44.2254 40.9356 42.3308 41.1797C42.98 40.2844 43.6292 39.3659 44.2387 38.4241C44.8481 37.4939 45.4179 36.552 45.9611 35.6219ZM32.5265 48.0283C31.2943 46.9121 30.0622 45.6679 28.8433 44.3075C30.0357 44.354 31.2546 44.3889 32.4868 44.3889C33.7322 44.3889 34.9643 44.3657 36.17 44.3075C34.9776 45.6679 33.7454 46.9121 32.5265 48.0283ZM22.6692 41.1797C20.7878 40.9356 18.9727 40.6333 17.2371 40.2612C17.7273 38.7613 18.3367 37.2148 19.0257 35.6684C19.5689 36.5986 20.1386 37.5287 20.7613 38.4589C21.384 39.3891 22.02 40.2961 22.6692 41.1797ZM32.4603 16.9831C33.6924 18.0994 34.9246 19.3435 36.1435 20.7039C34.9511 20.6574 33.7322 20.6225 32.5 20.6225C31.2546 20.6225 30.0224 20.6458 28.8168 20.7039C30.0092 19.3435 31.2413 18.0994 32.4603 16.9831ZM22.6559 23.8317C22.0067 24.727 21.3575 25.6455 20.7481 26.5874C20.1386 27.5176 19.5689 28.4478 19.0257 29.3779C18.3102 27.8199 17.7008 26.2618 17.1973 24.7502C18.9329 24.3898 20.7613 24.0758 22.6559 23.8317ZM10.6655 38.3892C5.97534 36.6334 2.9413 34.3312 2.9413 32.5057C2.9413 30.6802 5.97534 28.3664 10.6655 26.6222C11.8049 26.192 13.0503 25.8083 14.3355 25.4479C15.0907 27.7269 16.0844 30.0988 17.3166 32.529C16.0976 34.9475 15.1172 37.3078 14.3753 39.5752C13.0636 39.2147 11.8182 38.8194 10.6655 38.3892ZM17.7935 55.0047C15.9916 54.0978 15.2099 50.6444 15.8194 46.2028C15.9651 45.1098 16.2036 43.9587 16.4951 42.7843C19.0919 43.3424 21.9272 43.7727 24.9083 44.0517C26.6969 46.2028 28.5518 48.1562 30.4199 49.8654C26.1007 53.3885 22.0465 55.3187 19.2907 55.3187C18.6945 55.307 18.191 55.2024 17.7935 55.0047ZM49.2203 46.1446C49.843 50.5863 49.0746 54.0396 47.286 54.9582C46.8885 55.1675 46.3718 55.2605 45.7623 55.2605C43.0198 55.2605 38.9523 53.342 34.6331 49.8422C36.488 48.1329 38.3428 46.1912 40.105 44.0401C43.0993 43.761 45.9346 43.3308 48.5314 42.7611C48.8361 43.9354 49.0746 45.0633 49.2203 46.1446ZM54.3212 38.3892C53.1818 38.8194 51.9364 39.2031 50.6512 39.5635C49.896 37.2846 48.9024 34.9126 47.6702 32.4825C48.8891 30.064 49.8695 27.7036 50.6115 25.4363C51.9232 25.7967 53.1686 26.192 54.3345 26.6222C59.0247 28.378 62.0587 30.6802 62.0587 32.5057C62.0454 34.3312 59.0114 36.6451 54.3212 38.3892Z" fill="#61DAFB"/>
<path d="M32.4867 37.8193C35.8307 37.8193 38.5415 35.4403 38.5415 32.5056C38.5415 29.5709 35.8307 27.1919 32.4867 27.1919C29.1427 27.1919 26.4319 29.5709 26.4319 32.5056C26.4319 35.4403 29.1427 37.8193 32.4867 37.8193Z" fill="#61DAFB"/>
</svg>

        
    );
  };
   
export const Node = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.8816 4.66928C33.4399 3.85842 31.5601 3.86206 30.1171 4.66928C22.8899 8.65774 15.6626 12.6474 8.43407 16.634C7.02749 17.374 6.0788 18.8845 6.09393 20.4523V44.551C6.08377 46.1494 7.08138 47.6745 8.52424 48.4043C10.6005 49.5089 12.6177 50.7256 14.7315 51.7567C17.1732 52.9565 20.2281 53.2218 22.6996 51.9706C24.7059 50.9336 25.597 48.6271 25.5944 46.5075C25.6106 38.5543 25.597 30.601 25.6007 22.6476C25.6484 22.2942 25.3829 21.9164 24.9974 21.9249C24.0738 21.9103 23.1489 21.9164 22.2253 21.9225C21.8764 21.8896 21.5357 22.1794 21.5621 22.5302C21.5497 30.4322 21.5646 38.3366 21.5546 46.2398C21.5747 47.333 20.8362 48.3836 19.7826 48.7528C17.3493 49.6058 10.404 45.0962 10.404 45.0962C10.1491 44.9782 9.98729 44.7017 10.0123 44.4271C10.0123 36.4764 10.0135 28.5255 10.0123 20.576C9.97723 20.2554 10.1748 19.9668 10.4691 19.8359C17.6725 15.871 24.8722 11.8961 32.0757 7.9287C32.3259 7.76171 32.6747 7.76222 32.9243 7.92992C40.1277 11.8961 47.3287 15.8673 54.5334 19.8325C54.8287 19.9631 55.0178 20.2566 54.9878 20.576C54.9865 28.5255 54.9902 36.4764 54.9853 44.4261C55.0067 44.7074 54.8612 44.98 54.5986 45.1035C47.4624 49.047 40.2449 52.8633 33.1734 56.9213C32.8648 57.0982 32.5152 57.2987 32.1695 57.1037C30.3099 56.0751 28.4728 55.0065 26.6193 53.9679C26.4178 53.8421 26.1613 53.7881 25.951 53.9289C25.1201 54.3668 24.3384 54.7215 23.3842 55.0993C22.0439 55.6298 22.258 55.8468 23.4668 56.551C25.6344 57.7777 27.8056 58.9995 29.9731 60.2274C31.4001 61.1179 33.3174 61.1813 34.7902 60.3584C42.0186 56.3749 49.2448 52.3868 56.4746 48.4033C57.9136 47.6694 58.9162 46.1504 58.906 44.5508V20.4523C58.9201 18.9163 58.0076 17.4327 56.6434 16.6818C49.3911 12.6739 42.1352 8.67474 34.8816 4.66928Z" fill="#8CC84B"/>
        <path d="M45.7881 22.7627C42.9511 21.245 39.576 21.1641 36.4232 21.3626C34.1456 21.5876 31.7502 22.2161 30.0908 23.8488C28.3888 25.4901 28.0183 28.1404 28.8268 30.283C29.4061 31.7971 30.8643 32.7816 32.3723 33.3025C34.3148 33.9882 36.355 34.2003 38.3958 34.4123C40.2572 34.6057 42.1193 34.7993 43.9084 35.3524C44.6393 35.5945 45.4903 35.965 45.7142 36.7603C45.921 37.7019 45.6943 38.7966 44.9297 39.4508C42.5012 41.373 35.7456 41.0785 33.3461 39.5656C32.376 38.9211 31.958 37.7801 31.7879 36.6928C31.769 36.354 31.4962 36.0432 31.1284 36.069C30.2072 36.058 29.286 36.0605 28.3649 36.0678C28.0435 36.0408 27.7094 36.2695 27.6917 36.5975C27.5024 41.5776 32.0762 43.7486 36.3672 44.2265C38.8187 44.4601 41.324 44.4467 43.7382 43.9206C45.5529 43.5075 47.3725 42.7465 48.6217 41.3488C50.1622 39.6501 50.4651 37.121 49.7742 35.005C49.2461 33.4262 47.7367 32.4134 46.1938 31.8924C44.0955 31.1729 41.6088 30.7861 39.7084 30.6052C36.9461 30.3421 33.6636 30.4496 32.8818 28.6344C32.57 27.684 32.8353 26.5039 33.7087 25.9193C36.0196 24.3517 40.723 24.56 43.1162 25.731C44.2151 26.2812 44.8519 27.4114 45.1148 28.5524C45.1635 28.8875 45.389 29.2373 45.777 29.2227C46.6918 29.241 47.6067 29.2276 48.5214 29.2288C48.8356 29.2507 49.1797 29.0734 49.241 28.7516C49.2022 26.367 47.9845 23.9258 45.7881 22.7627Z" fill="#8CC84B"/>
        </svg>
        

    );
  };
  export const Tailwind = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11_56)">
            <path d="M32.5 0.0864258C23.8334 0.0864258 18.4166 7.28958 16.25 21.6955C19.5 14.4923 23.2916 11.7912 27.625 13.5921C30.0973 14.6193 31.8645 17.6011 33.8206 20.9012C37.0071 26.2777 40.6948 32.5 48.75 32.5C57.4166 32.5 62.8334 25.2968 65 10.8909C61.75 18.0941 57.9584 20.7952 53.625 18.9943C51.1527 17.9671 49.3855 14.9853 47.4294 11.6852C44.2429 6.30873 40.5552 0.0864258 32.5 0.0864258ZM16.25 32.5C7.58342 32.5 2.16658 39.7031 0 54.109C3.25 46.9059 7.04158 44.2047 11.375 46.0056C13.8473 47.0329 15.6145 50.0147 17.5706 53.3147C20.7571 58.6912 24.4448 64.9136 32.5 64.9136C41.1666 64.9136 46.5834 57.7104 48.75 43.3045C45.5 50.5077 41.7084 53.2088 37.375 51.4079C34.9027 50.3806 33.1355 47.3988 31.1794 44.0988C27.9929 38.7223 24.3052 32.5 16.25 32.5Z" fill="url(#paint0_linear_11_56)"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_11_56" x1="-462.259" y1="3186.47" x2="62.2593" y2="6727.34" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2298BD"/>
            <stop offset="1" stop-color="#0ED7B5"/>
            </linearGradient>
            <clipPath id="clip0_11_56">
            <rect width="65" height="65" fill="white"/>
            </clipPath>
            </defs>
        </svg>

        
    );
  };
   
  export const MUI = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11_51)">
            <path d="M0 35.4539V0.00683594L24.375 17.7304V29.5461L8.125 17.7304V41.3618L0 35.4539Z" fill="#00B0FF"/>
            <path d="M24.375 17.7304L48.75 0.00683594V35.4539L32.5 47.2696L24.375 41.3618L40.625 29.5461V17.7304L24.375 29.5461V17.7304Z" fill="#0081CB"/>
            <path d="M24.375 41.3618V53.1775L40.625 64.9932V53.1775L24.375 41.3618Z" fill="#00B0FF"/>
            <path d="M40.625 64.9932L65 47.2696V23.6382L56.875 29.5461V41.3618L40.625 53.1775V64.9932ZM56.875 17.7304V5.91469L65 0.00683594V11.8225L56.875 17.7304Z" fill="#0081CB"/>
            </g>
            <defs>
            <clipPath id="clip0_11_51">
            <rect width="65" height="65" fill="white"/>
            </clipPath>
            </defs>
        </svg>

        
    );
  };
 

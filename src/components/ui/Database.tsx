"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from  "../../utils/cn";



export function Database() {
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
        <Container className="circle-3">
          <MongoDb className="h-10 w-10 " />
        </Container>
      </div>
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="circle-3">
          <SQL className="h-10 w-10 " />
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
export const MongoDb = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_11_64)">
        <path d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z" fill="#13AA52"/>
        <path d="M41.1874 28.5289C39.1346 19.4689 34.2831 16.4899 33.7607 15.3518C33.1894 14.5488 32.6105 13.1206 32.6105 13.1206C32.601 13.0965 32.5857 13.054 32.568 13.0127C32.5089 13.8157 32.4785 14.1254 31.7193 14.9354C30.5437 15.8545 24.5122 20.9155 24.0215 31.2089C23.5638 40.8091 30.9563 46.5296 31.956 47.2589L32.0697 47.3396V47.3326C32.076 47.3808 32.3871 49.6177 32.6054 51.9879H33.3887C33.5725 50.3125 33.848 48.6484 34.2139 47.0031L34.2774 46.9619C34.7246 46.6412 35.151 46.2924 35.5539 45.9177L35.5996 45.8764C37.7248 43.9131 41.5455 39.372 41.508 32.1318C41.5001 30.9241 41.3929 29.7191 41.1874 28.5289ZM32.5223 41.8387C32.5223 41.8387 32.5223 28.374 32.9666 28.3766C33.3132 28.3766 33.762 45.7444 33.762 45.7444C33.145 45.6701 32.5223 42.886 32.5223 41.8387Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_11_64">
        <rect width="65" height="65" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        

        
    );
  };
   
export const SQL = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11_67)">
            <path d="M19.8967 46.3593H18.1369C18.0747 43.389 17.9033 40.5966 17.6231 37.9799H17.6075L14.9283 46.3593H13.5885L10.9253 37.9799H10.91C10.7124 40.4922 10.5879 43.2853 10.5362 46.3593H8.93225C9.03562 42.6212 9.29542 39.1167 9.71061 35.8455H11.8917L14.4301 43.5709H14.4457L16.9998 35.8455H19.0867C19.5437 39.6771 19.8137 43.1819 19.8967 46.3593ZM27.5283 38.6022C26.8118 42.4903 25.8665 45.3154 24.6933 47.0789C23.7793 48.4363 22.7779 49.1157 21.6873 49.1157C21.3966 49.1157 21.0379 49.028 20.6128 48.8539V47.9164C20.8206 47.9463 21.0644 47.9633 21.3446 47.9633C21.854 47.9633 22.2634 47.8232 22.5755 47.5423C22.9489 47.2002 23.1356 46.8157 23.1356 46.3903C23.1356 46.0985 22.9901 45.5021 22.6997 44.5989L20.7685 38.6019H22.4973L23.8834 43.0871C24.1948 44.1055 24.3247 44.8165 24.2727 45.2215C25.0307 43.1972 25.5601 40.99 25.8617 38.6015H27.5283V38.6022Z" fill="#5D87A1"/>
            <path d="M50.9524 46.3595H45.9537V35.8456H47.6352V45.0653H50.9524V46.3595ZM44.6452 46.6135L42.7124 45.6597C42.8838 45.5189 43.0477 45.3666 43.1953 45.1901C44.0168 44.225 44.4266 42.7979 44.4266 40.9075C44.4266 37.4292 43.0616 35.6892 40.3307 35.6892C38.9916 35.6892 37.947 36.1306 37.1999 37.0137C36.3791 37.9794 35.9693 39.4015 35.9693 41.2816C35.9693 43.1297 36.3325 44.4855 37.0591 45.3455C37.7239 46.1245 38.726 46.5146 40.0662 46.5146C40.566 46.5146 41.0248 46.4533 41.4427 46.3299L43.959 47.7948L44.6452 46.6135ZM38.384 44.2556C37.9582 43.5708 37.7454 42.4711 37.7454 40.9548C37.7454 38.3076 38.5496 36.9824 40.1597 36.9824C41.0013 36.9824 41.6181 37.2993 42.0126 37.9318C42.4376 38.6177 42.6515 39.7075 42.6515 41.2027C42.6515 43.8717 41.8466 45.2064 40.2375 45.2064C39.3956 45.2067 38.7788 44.8908 38.384 44.2556ZM35.2365 43.4453C35.2365 44.3369 34.9094 45.0683 34.2558 45.6413C33.6016 46.2119 32.7242 46.4979 31.6249 46.4979C30.5966 46.4979 29.5996 46.1694 28.6345 45.5158L29.0864 44.613C29.9168 45.0289 30.6687 45.2356 31.3437 45.2356C31.9772 45.2356 32.4723 45.0952 32.8314 44.8167C33.1901 44.5372 33.404 44.1451 33.404 43.6493C33.404 43.0247 32.9684 42.4908 32.1693 42.0436C31.4324 41.639 29.9587 40.7929 29.9587 40.7929C29.1599 40.2108 28.76 39.5858 28.76 38.5561C28.76 37.704 29.0582 37.0161 29.655 36.4927C30.2525 35.9674 31.0233 35.7055 31.9683 35.7055C32.9443 35.7055 33.8314 35.967 34.6305 36.4846L34.2252 37.3877C33.5417 37.0973 32.8671 36.9521 32.2016 36.9521C31.6626 36.9521 31.2464 37.0817 30.957 37.3418C30.6653 37.6009 30.4854 37.9325 30.4854 38.3392C30.4854 38.9608 30.9302 39.5015 31.751 39.9575C32.4978 40.3628 34.0083 41.2234 34.0083 41.2234C34.8274 41.8046 35.2365 42.4238 35.2365 43.4453Z" fill="#F8981D"/>
            <path d="M53.0634 32.3241C52.0466 32.2983 51.2594 32.4006 50.5987 32.6802C50.408 32.7563 50.1047 32.7563 50.0781 32.9974C50.1812 33.0994 50.1931 33.264 50.2825 33.4048C50.4348 33.6588 50.7004 34.0006 50.9429 34.1787C51.2091 34.3828 51.4764 34.5848 51.7566 34.7626C52.2507 35.0683 52.8107 35.2461 53.2922 35.5508C53.5728 35.728 53.8516 35.9572 54.1325 36.1479C54.2705 36.2496 54.359 36.4145 54.5382 36.4781V36.4394C54.4484 36.3251 54.4229 36.1598 54.3348 36.0327L53.9533 35.6647C53.5847 35.1696 53.1266 34.7374 52.6325 34.3824C52.2259 34.1022 51.3363 33.7214 51.1714 33.2528L51.1455 33.227C51.425 33.2008 51.7566 33.0994 52.0222 33.0216C52.4544 32.9077 52.8485 32.9335 53.2919 32.8196C53.4959 32.7686 53.6983 32.7046 53.903 32.6417V32.5271C53.6731 32.2983 53.5092 31.9943 53.2674 31.778C52.6206 31.2193 51.9079 30.6729 51.1714 30.2155C50.7769 29.9608 50.2696 29.7969 49.8496 29.5803C49.6983 29.5038 49.4433 29.4661 49.3542 29.3389C49.1263 29.0594 48.9981 28.6914 48.8329 28.3606C48.4656 27.6625 48.1089 26.8878 47.792 26.1496C47.5628 25.6545 47.4234 25.1601 47.1439 24.702C45.8347 22.5427 44.413 21.2349 42.2278 19.9512C41.7582 19.684 41.1995 19.5701 40.6028 19.43L39.6496 19.3796C39.4463 19.2905 39.2426 19.0488 39.0651 18.9345C38.3401 18.4775 36.4736 17.4869 35.9404 18.7948C35.597 19.6214 36.4484 20.4341 36.7409 20.8534C36.9568 21.1445 37.2367 21.4757 37.3876 21.8062C37.4771 22.0221 37.5022 22.2513 37.5917 22.4795C37.795 23.0385 37.9851 23.6605 38.2524 24.1821C38.3918 24.448 38.5438 24.7275 38.722 24.9683C38.824 25.1091 39.0015 25.1713 39.0403 25.4008C38.8631 25.6538 38.8492 26.0357 38.7475 26.3533C38.2905 27.7886 38.469 29.5667 39.1168 30.6215C39.3194 30.9391 39.803 31.6383 40.4497 31.3703C41.0224 31.1418 40.8955 30.4178 41.0601 29.783C41.0979 29.6296 41.073 29.529 41.1492 29.4283V29.4531C41.3264 29.8085 41.5052 30.1509 41.6695 30.5073C42.0636 31.1292 42.7498 31.7773 43.3214 32.2082C43.6258 32.4381 43.8669 32.8311 44.2481 32.9716V32.9335H44.2229C44.1457 32.8196 44.0328 32.7686 43.9315 32.6802C43.7023 32.4513 43.4486 32.1718 43.2708 31.9181C42.7383 31.2064 42.2669 30.4185 41.8487 29.6055C41.644 29.211 41.4675 28.7798 41.3026 28.3861C41.2257 28.2341 41.2257 28.0049 41.0982 27.9284C40.9071 28.2075 40.6286 28.4493 40.4892 28.7914C40.2474 29.3385 40.2223 30.0115 40.1325 30.7113L40.0825 30.7358C39.6778 30.6341 39.5371 30.2155 39.3834 29.8602C39.0029 28.9577 38.9389 27.5091 39.2691 26.4679C39.3575 26.2016 39.7401 25.3631 39.5874 25.1094C39.5109 24.8663 39.2565 24.7279 39.1171 24.5364C38.9532 24.2957 38.7737 23.991 38.6594 23.7237C38.3547 23.0127 38.2014 22.2248 37.8732 21.5141C37.7199 21.1829 37.4536 20.8401 37.238 20.5351C36.9959 20.1923 36.7296 19.9509 36.5382 19.5446C36.475 19.4048 36.3862 19.1763 36.4879 19.0243C36.5127 18.9223 36.5644 18.8842 36.6657 18.8587C36.8303 18.7196 37.3006 18.8964 37.4655 18.9729C37.9365 19.1634 38.3302 19.3412 38.7233 19.6078C38.9012 19.7353 39.0919 19.9767 39.3201 20.0403H39.5874C39.9931 20.1287 40.4504 20.0648 40.8323 20.1798C41.5052 20.396 42.1149 20.7133 42.6617 21.0557C44.3256 22.1109 45.6977 23.6101 46.6239 25.4008C46.7759 25.6926 46.8406 25.9598 46.9793 26.2642C47.2469 26.8871 47.5778 27.5224 47.8433 28.1321C48.1103 28.7288 48.3646 29.3382 48.7458 29.834C48.9359 30.1006 49.6997 30.2403 50.0421 30.3801C50.2954 30.494 50.6899 30.5953 50.9184 30.7351C51.3506 31.0014 51.7811 31.3071 52.1874 31.5998C52.3898 31.7522 53.0256 32.0698 53.0634 32.3241ZM40.1056 21.2849C39.9302 21.2831 39.7554 21.3046 39.5857 21.3488V21.3743H39.6102C39.7125 21.5773 39.8904 21.7181 40.0172 21.8953C40.1196 22.099 40.2083 22.301 40.3086 22.5043L40.3331 22.4791C40.5123 22.3523 40.6014 22.149 40.6014 21.8439C40.5242 21.7542 40.5123 21.6664 40.448 21.5773C40.3732 21.4502 40.2083 21.3869 40.1056 21.2849Z" fill="#5D87A1"/>
            <path d="M54.2733 46.3578H54.5365V45.0697H54.1417L53.8197 45.9487L53.4698 45.0697H53.0896V46.3578H53.3382V45.3778H53.3521L53.7187 46.3578H53.9081L54.2733 45.3778V46.3578ZM52.1531 46.3578H52.4316V45.288H52.7962V45.0693H51.7733V45.288H52.1525L52.1531 46.3578Z" fill="#F8981D"/>
            </g>
            <defs>
            <clipPath id="clip0_11_67">
            <rect width="65" height="65" fill="white"/>
            </clipPath>
            </defs>
        </svg>

        

    );
  };
 
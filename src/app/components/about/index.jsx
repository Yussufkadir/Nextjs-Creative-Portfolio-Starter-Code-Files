import React from "react";
import clsx from "clsx";

const ItemLayout = ({children, className}) => {
    return(
        <div className={clsx('custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8', className)}>
          {children}  
        </div>
    );
};

const AboutDetails = () => {
    return(
        <section className="py-20 w-full">
            <div className="grid grid-cols-12 gap-4 xs:gap-6 gap-8 w-full">
                <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
                    Data Science Enthusiast
                </h2>
                <p className="font-light text-xs sm:text-sm md:text-base">

                </p>
                </ItemLayout>
                <ItemLayout className={' col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                    25+ <sub className="font-semibold text-base">clients</sub>
                </p>
                </ItemLayout>
                <ItemLayout className={' col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                    4+ <sub className="font-semibold text-base">years</sub>
                </p>
                </ItemLayout>
                <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
                    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs?username=Yussufkadir&theme=dark&hide_border=true" alt='Yussufkadir' loading="lazy" />
                </ItemLayout>
                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=Yussufkadir&theme=dark&hide_border=true" alt='Yussufkadir' loading="lazy" />
                </ItemLayout>
                <ItemLayout className={"col-span-full"}>
                    <img className="w-full h-auto" src="https://skillicons.dev/icons?i=js,html,css,pytorch,py,azure,c,cpp,flutter,tensorflow,aws,anaconda" alt='Yussufkadir' loading="lazy" />
                </ItemLayout>
                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                <img src="https://github-readme-streak-stats.herokuapp.com?user=Yussufkadir&type=png" alt="Yussufkadir" loading="lazy"/>
                </ItemLayout>
                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=Yussufkadir&repo=Kaggle-House-prediction" alt='Yussufkadir' loading="lazy" />
                </ItemLayout>
            </div>
        </section>
    )
}

export default AboutDetails;
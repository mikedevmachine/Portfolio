import ItemLayout from '../ItemLayout';
import React from 'react';
import { aboutData } from '@/app/data';




const AboutDetails = () => {



  
  return (


    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">

        <ItemLayout className = {'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
      <h2 className='text-xl md:text-xl md:text-3xl text-left w-full capitalize'> {aboutData.aboutMe}</h2>
      <p className='font-light text-yellow text-xs sm:text-sm md:text-base'>

            {aboutData.aboutMeText}

      </p>
        </ItemLayout>

        <ItemLayout className = {'col-span-full xs:col-span-6 lg:col-span-4'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>{aboutData.atm}
      <sub className='font-semibold text-base text-yellow'> {aboutData.atmText}</sub>
</p>
        
        
        </ItemLayout>

        <ItemLayout className = {'col-span-full xs:col-span-6 lg:col-span-4'}>
      <p className='font-semibold w-full text-left text-2xl sm:text-5xl'> 
        {aboutData.exp}<sub className='font-semibold text-base text-yellow'> {aboutData.expText}</sub>
       </p>
        </ItemLayout>

        <ItemLayout className = {'col-span-full sm:col-span-6 md:col-span-4 !p-0'}>
          <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs?username=mikedevmachine&show_icons=true&theme=transparent&text_color=FEFE5B&title_color=FFFFFF&icon_color=FFFFFF&hide_border=true&text_bold=false"

           alt="Mikedevmachine" loading='lazy'/>	  
        </ItemLayout>
        <ItemLayout className = {'col-span-full md:col-span-8 !p-0'}>
          <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=mikedevmachine&show_icons=true&theme=transparent&text_color=FEFE5B&title_color=FFFFFF&icon_color=FFFFFF&hide_border=true&text_bold=false"

           alt="Mikedevmachine" loading='lazy'/>	  
        </ItemLayout>


        <ItemLayout className = {'col-span-full md:col-span-full'}>
          <img className='w-full h-auto' src="https://skillicons.dev/icons?i=js,html,css,java,aws,react"

           alt="Mylangs" loading='lazy'/>	  
        </ItemLayout>


        <ItemLayout className = {'col-span-full md:col-span-6 !p-0'}>
            
          <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=mikedevmachine&theme=dark&hide_border=true&type=png&background=FF8C6E00&ring=FEFE5B&currStreakLabel=FEFE5B&text_bold=false" 
          alt="GitHub Streak" />
        </ItemLayout>
       
        <ItemLayout className = {'col-span-full md:col-span-6 !p-0'}>
          <img className='w-full h-auto' src=" https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats&theme=transparent&hide_border=true&text_color=FEFE5B&title_color=FFFFFF&icon_color=FFFFFF&text_bold=false"

           alt="Mikedevmachine" loading='lazy'/>	  
        </ItemLayout>

</div>
    </section>
  );
}
export default AboutDetails;
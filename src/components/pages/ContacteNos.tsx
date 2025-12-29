import React from 'react';
import { getImageUrl } from '../../utils/images';
import Frame27 from '../../imports/Frame27';
import Frame160 from '../../imports/Frame160';
import Frame162 from '../../imports/Frame162';

export function ContacteNos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Navbar will overlay this */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center px-4 py-24 md:py-32">
        <div className="absolute inset-0 w-full h-full">
          <Frame27 />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Frame160 />
        </div>
      </section>
      
      {/* Map Section */}
      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[389px] rounded-[20px] md:rounded-[32px] lg:rounded-[40px] overflow-hidden">
            <Frame162 />
          </div>
        </div>
      </section>
      
    </div>
  );
}
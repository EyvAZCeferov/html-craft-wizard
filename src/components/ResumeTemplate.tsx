
import React from "react";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import SkillRating from "@/components/SkillRating";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationTimeline from "@/components/EducationTimeline";
import TrainingTimeline from "@/components/TrainingTimeline";
import SectionHeading from "@/components/SectionHeading";
import Certificate from "@/components/Certificate";

const ResumeTemplate = () => {
  return (
    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
      {/* Header Section */}
      <div className="relative">
        <div className="flex flex-col md:flex-row">
          {/* Left Header - Name and Title */}
          <div className="bg-white p-6 md:p-10 md:w-2/5">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              ORXAN XUDUYEV
            </h1>
            <h2 className="text-2xl font-bold text-gray-700 mt-1">
              ELMƏDDİN oğlu
            </h2>
            <div className="mt-6 border-t border-b border-gray-300 py-4">
              <h3 className="text-xl font-semibold text-center">OFİS MENECERİ</h3>
            </div>
          </div>

          {/* Right Header - Contact Info with Photo */}
          <div className="bg-gray-100 p-6 md:p-10 md:w-3/5 border-l border-gray-200">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-red-700 mb-6 md:mb-0 md:mr-6 flex-shrink-0">
                <img 
                  src="/lovable-uploads/32978899-484e-49fd-b47e-f544a827f9c6.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3 flex-grow">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-3" />
                  <span>(+994 55) 369 89 69</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-3" />
                  <span>cvakansiya@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-1" />
                  <span>Bakı şəh., Nəsimi ray., Həsən Əliyev küç., bina XX</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-gray-500 mr-3" />
                  <a 
                    href="https://www.linkedin.com/in/cvakansiya/" 
                    className="text-blue-600 hover:underline"
                  >
                    https://www.linkedin.com/in/cvakansiya/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Info Banner */}
      <div className="bg-gray-700 text-white p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <span className="font-semibold">Doğum tarixi:</span>
            <span>01.05.1985</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Ailə vəziyyəti:</span>
            <span>Subay</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Hərbi xidmət:</span>
            <span>2007 - 2008</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Vətəndaşlıq:</span>
            <span>Azərbaycan</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Cinsi:</span>
            <span>Kişi</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Sürücülük vəsiqəsi:</span>
            <span>B kateqoriyası</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="bg-white p-6 md:p-8 md:w-2/5">
          <div className="mb-10">
            <SectionHeading title="KOMPÜTER BACARIQLARI" />
            <div className="space-y-4 mt-6">
              <SkillRating name="MS Windows" rating={8} />
              <SkillRating name="MS Office" rating={9} />
              <SkillRating name="Adobe Photoshop" rating={7} />
              <SkillRating name="Adobe Illustrator" rating={5} />
              <SkillRating name="Internet" rating={10} />
            </div>
          </div>

          <div className="mb-10">
            <SectionHeading title="DİL BACARIQLARI" />
            <div className="space-y-4 mt-6">
              <SkillRating name="Azərbaycan dili / ana dili" rating={10} />
              <SkillRating name="Türk dili" rating={9} />
              <SkillRating name="İngilis dili" rating={8} />
              <SkillRating name="Rus dili" rating={4} />
            </div>
          </div>

          <div>
            <SectionHeading title="SERTİFİKATLAR" />
            <div className="space-y-6 mt-6">
              <Certificate 
                date="27.11.2018"
                title="MOS MASTER CERTIFICATE"
                organization="Microsoft Corporation"
                details={["Microsoft Office Specialist (MOS) Master"]}
              />
              <Certificate 
                date="12.04.2017"
                title="MOS EXPERT CERTIFICATE"
                organization="Microsoft Corporation"
                details={["Microsoft Office Specialist (MOS) Expert"]}
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-gray-100 p-6 md:p-8 md:w-3/5 border-l border-gray-200">
          <div className="mb-10">
            <SectionHeading title="İŞ TƏCRÜBƏSİ" />
            <div className="mt-6">
              <ExperienceTimeline 
                experiences={[
                  {
                    startDate: "04.05.2018",
                    endDate: "13.07.2015",
                    company: '"Azercell Telekom" MMC',
                    position: "OFİS MENECERİ",
                    responsibilities: [
                      "Ofis daxili işlərin icra olunması",
                      "Lazımi sənədlərin, məktubların hazırlanması",
                      "Sosial mediadan yönləndiriləın sualları cavablandırmaq"
                    ]
                  },
                  {
                    startDate: "04.05.2015",
                    endDate: "17.08.2011",
                    company: '"Delta Telekom" MMC',
                    position: "OFİS MENECERİ",
                    responsibilities: [
                      "E-mail və yazışmaların həyata keçirilməsi",
                      "Rəhbərliyin verdiyi tapşırıqları yerinə yetirmək"
                    ]
                  }
                ]}
              />
            </div>
          </div>

          <div className="mb-10">
            <SectionHeading title="TƏHSİL" />
            <div className="mt-6">
              <EducationTimeline 
                education={[
                  {
                    startYear: "2008",
                    endYear: "2010",
                    institution: "Bakı Dövlət Universiteti",
                    degree: "MAGİSTR",
                    details: ["İdarəetmənin informasiya texnologiyaları"]
                  },
                  {
                    startYear: "2003",
                    endYear: "2007",
                    institution: "Azərbaycan Texniki Universiteti",
                    degree: "BAKALAVR",
                    details: ["İnformasiya texnologiyaları və proqramlaşdırma"]
                  }
                ]}
              />
            </div>
          </div>

          <div>
            <SectionHeading title="TƏLİM, SEMİNAR VƏ KURSLAR" />
            <div className="mt-6">
              <TrainingTimeline 
                trainings={[
                  {
                    date: "10.2015",
                    institution: "Step It Academy",
                    type: "TƏLİM",
                    details: ["Peşəkar ofis proqramları təlimi"]
                  },
                  {
                    startDate: "03.2014",
                    endDate: "07.2014",
                    institution: "Celt Colleges",
                    type: "KURS",
                    details: ["MS Office proqramlarının tədrisi (MS Windows, Word, Excel, Outlook, PowerPoint)"]
                  },
                  {
                    startDate: "08.2012",
                    endDate: "04.2013",
                    institution: "OLD SCHOOL Language Courses",
                    type: "KURS",
                    details: ["İngilis dili kursu"]
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;

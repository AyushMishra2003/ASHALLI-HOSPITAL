import React from 'react';
import { Activity, Users, Calendar, MapPin, Phone, Stethoscope, Bone, Eye, Baby, Brain, UserCheck, Ear, Pill } from 'lucide-react';

import BreadCrumbsComponent from '../../components/Breadcums';

const ServiceDetail = ({ params }) => {
  // Service data array
  const servicesData = [
    {
      id: 'cardiology',
      url: 'cardiology',
      title: 'Cardiology Hospital in Lucknow',
      icon: Activity,
      iconColor: '#ed8022',
      description: {
        intro: [
          "One of the most critical and key branches of your healthcare system is Cardiology. The department assumes extreme significance as it deals with the most important organ of your body – your Heart. Hence, by default, the role of Cardiologists in ensuring your good health through a healthy heart becomes that much more priceless.",
          "The Department of Cardiology at MedCare Hospital, the best multispeciality hospital in Lucknow, is designed and built by keeping the criticality of the sector in mind. The Hospital has left no stone unturned in investing in some of the latest diagnostic and medical equipment connected with Cardiology with a firm objective to offer Cardiac services of the highest Quality. A supremely designed Cath Lab with some of the best cardiac evaluation facilities has been recently added to our list of state-of-the-art infrastructure at the hospital.",
          "The Cardiology Department is led by a vastly experienced Cardiothoracic surgeon in Lucknow with more than three decades of experience and ably supported by some of the best and most seasoned cardiologists in Lucknow, with extensive experience having worked in hospitals of repute.",
          "We are well-set with the necessary diagnostic tests connected with Cardiology to ensure that no time is lost in administering immediate care to patients in distress."
        ],
        facilitiesIntro: "At MedCare Hospital, your trusted cardiac hospital in Lucknow, uncompromising patient care is all that we focus upon. The Department of Cardiology reflects our commitment to our patients as we have all key facilities under one roof to diagnose and treat different types of heart diseases."
      },
      facilities: [
        {
          title: "Echocardiogram",
          description: "Also called a Diagnostic Cardiac Ultrasound, this test uses high-frequency sound waves to take pictures of your heart. The type of echocardiogram needed depends upon the nature of the symptom and data required by your cardiologist for evaluation.",
          types: [
            "Transthoracic Echocardiogram (TTE)",
            "Doppler Echocardiogram",
            "3D- Echo",
            "Intracardiac Echocardiogram (ITE)",
            "M-mode Echocardiogram",
            "Stress Echocardiogram",
            "Transoesophageal Echocardiogram (TEE)"
          ]
        },
        {
          title: "Holter Monitoring",
          description: "This is a method used by doctors to continuously monitor the electrical activity of your heart over an extended period to detect irregular heart rhythms."
        },
        {
          title: "Cath Lab",
          description: "The hospital is well-equipped with a higher cutting-edge technology Cath lab to cater to life-saving procedures and advanced cardiac interventions with precision and safety."
        }
      ]
    },
    {
      id: 'orthopedics',
      url: 'orthopedics',
      title: 'Orthopedics Hospital in Lucknow',
      icon: Bone,
      iconColor: '#3b82f6',
      description: {
        intro: [
          "Orthopedics is a specialized branch of medicine focused on the diagnosis, treatment, and prevention of disorders related to the musculoskeletal system. This includes bones, joints, ligaments, tendons, muscles, and nerves that enable movement and support the body's structure.",
          "The Department of Orthopedics at MedCare Hospital, the best multispeciality hospital in Lucknow, is equipped with state-of-the-art facilities and cutting-edge technology to provide comprehensive orthopedic care. Our department specializes in both surgical and non-surgical treatments for a wide range of musculoskeletal conditions.",
          "Our Orthopedic Department is led by highly experienced orthopedic surgeons in Lucknow with decades of expertise in complex bone and joint surgeries. The team includes specialists in various subspecialties including joint replacement, spine surgery, sports medicine, and trauma care.",
          "We provide 24/7 emergency orthopedic services and are well-equipped to handle complex fractures, joint injuries, and other orthopedic emergencies with immediate care and precision."
        ],
        facilitiesIntro: "At MedCare Hospital, your trusted orthopedic hospital in Lucknow, we provide comprehensive musculoskeletal care under one roof. Our Orthopedic Department is committed to restoring mobility and improving the quality of life for our patients through advanced treatment modalities."
      },
      facilities: [
        {
          title: "Joint Replacement Surgery",
          description: "We offer comprehensive joint replacement services including total and partial joint replacements for hip, knee, shoulder, and other joints using the latest surgical techniques and prosthetic materials.",
          types: [
            "Total Hip Replacement (THR)",
            "Total Knee Replacement (TKR)",
            "Partial Knee Replacement",
            "Shoulder Joint Replacement",
            "Revision Joint Surgery",
            "Computer-Assisted Joint Surgery",
            "Minimally Invasive Joint Replacement"
          ]
        },
        {
          title: "Spine Surgery Center",
          description: "Our spine center provides comprehensive treatment for spinal disorders including herniated discs, spinal stenosis, scoliosis, and complex spinal deformities using advanced surgical and non-surgical techniques."
        },
        {
          title: "Sports Medicine & Arthroscopy",
          description: "Specialized care for sports-related injuries and joint problems using minimally invasive arthroscopic techniques for faster recovery and better outcomes."
        },
        {
          title: "Trauma & Emergency Orthopedics",
          description: "24/7 emergency orthopedic services for fractures, dislocations, and traumatic injuries with immediate surgical intervention when required."
        }
      ]
    },
    {
      id: 'ophthalmology',
      url: 'ophthalmology',
      title: 'Ophthalmology Hospital in Lucknow',
      icon: Eye,
      iconColor: '#10b981',
      description: {
        intro: [
          "Ophthalmology is a specialized branch of medicine that focuses on the comprehensive care of the eyes and visual system. This includes the diagnosis, treatment, and prevention of eye diseases, disorders of the visual system, and vision-related problems that can significantly impact your quality of life.",
          "The Department of Ophthalmology at MedCare Hospital, the best multispeciality hospital in Lucknow, is equipped with state-of-the-art diagnostic equipment and advanced surgical facilities to provide comprehensive eye care services. Our department offers both medical and surgical treatments for a wide spectrum of eye conditions.",
          "Our Ophthalmology Department is led by highly skilled and experienced ophthalmologists in Lucknow who specialize in various subspecialties including cataract surgery, retinal disorders, glaucoma management, corneal diseases, and pediatric ophthalmology with years of expertise in complex eye surgeries.",
          "We provide comprehensive eye examination services and are equipped with the latest diagnostic technology to detect and treat eye conditions at their earliest stages, ensuring optimal visual outcomes for our patients."
        ],
        facilitiesIntro: "At MedCare Hospital, your trusted eye care hospital in Lucknow, we are committed to preserving and enhancing your vision through advanced eye care services. Our Ophthalmology Department provides complete eye care solutions under one roof with cutting-edge technology and personalized treatment approaches."
      },
      facilities: [
        {
          title: "Cataract Surgery",
          description: "Advanced cataract surgery using the latest phacoemulsification techniques and premium intraocular lenses (IOLs) to restore clear vision with minimal recovery time and excellent visual outcomes.",
          types: [
            "Phacoemulsification Cataract Surgery",
            "Laser-Assisted Cataract Surgery (FLACS)",
            "Premium IOL Implantation",
            "Toric IOL for Astigmatism",
            "Multifocal IOL Implantation",
            "Extended Depth of Focus (EDOF) IOLs",
            "Micro-Incision Cataract Surgery (MICS)"
          ]
        },
        {
          title: "Retinal Diseases Treatment",
          description: "Comprehensive diagnosis and treatment of retinal disorders including diabetic retinopathy, age-related macular degeneration, retinal detachment, and other vitreoretinal conditions using advanced surgical and laser techniques."
        },
        {
          title: "Glaucoma Management",
          description: "Complete glaucoma care including early detection, medical management, laser treatments, and surgical interventions to prevent vision loss and preserve optic nerve function."
        },
        {
          title: "Corneal Transplantation",
          description: "Advanced corneal transplant procedures including full-thickness and partial-thickness transplants for various corneal diseases and injuries to restore corneal clarity and vision."
        },
        {
          title: "Pediatric Ophthalmology",
          description: "Specialized eye care for children including treatment of amblyopia (lazy eye), strabismus (squint), pediatric cataracts, and other childhood eye conditions with child-friendly approaches."
        }
      ]
    },
    {
      id: 'pediatrics',
      url: 'pediatrics',
      title: 'Pediatrics & Neonatology Hospital in Lucknow',
      icon: Baby,
      iconColor: '#f59e0b',
      description: {
        intro: [
          "Pediatrics is a specialized branch of medicine dedicated to the comprehensive healthcare of infants, children, and adolescents from birth to 18 years of age. This vital medical specialty focuses on the physical, emotional, and social health of children, addressing their unique medical needs during crucial developmental stages.",
          "The Department of Pediatrics & Neonatology at MedCare Hospital, the best multispeciality hospital in Lucknow, provides world-class pediatric care with state-of-the-art facilities designed specifically for children. Our department combines advanced medical technology with a child-friendly environment to ensure comfortable and effective treatment for young patients.",
          "Our Pediatrics Department is led by highly experienced pediatricians and neonatologists in Lucknow with extensive expertise in child healthcare, neonatal intensive care, and pediatric subspecialties. The team includes specialists in pediatric cardiology, gastroenterology, neurology, and emergency care with decades of experience in treating complex pediatric conditions.",
          "We provide 24/7 pediatric emergency services and specialized neonatal intensive care unit (NICU) facilities to handle premature births, birth complications, and pediatric emergencies with immediate expert care and advanced life support systems."
        ],
        facilitiesIntro: "At MedCare Hospital, your trusted pediatric hospital in Lucknow, we understand that children are not just small adults - they require specialized care tailored to their unique needs. Our Pediatrics & Neonatology Department is committed to providing comprehensive healthcare for children from newborns to adolescents in a caring, child-friendly environment."
      },
      facilities: [
        {
          title: "Neonatal Intensive Care Unit (NICU)",
          description: "State-of-the-art NICU equipped with advanced life support systems, incubators, and monitoring equipment to care for premature babies and critically ill newborns with round-the-clock specialized nursing care.",
          types: [
            "Level III NICU Care",
            "Premature Baby Care",
            "Neonatal Ventilator Support",
            "Phototherapy for Jaundice",
            "Neonatal Surgery Support",
            "Breast Milk Banking",
            "Kangaroo Mother Care (KMC)"
          ]
        },
        {
          title: "Pediatric Emergency Care",
          description: "24/7 pediatric emergency department staffed with specialized pediatric emergency physicians and nurses trained to handle all types of childhood emergencies, trauma, and acute illnesses."
        },
        {
          title: "Pediatric Subspecialty Services",
          description: "Comprehensive subspecialty care including pediatric cardiology, neurology, gastroenterology, pulmonology, endocrinology, and nephrology with dedicated specialists for complex pediatric conditions."
        },
        {
          title: "Child Development & Vaccination Center",
          description: "Complete immunization services following national and international vaccination schedules, along with growth monitoring, developmental assessments, and early intervention programs."
        },
        {
          title: "Pediatric Surgery Department",
          description: "Specialized pediatric surgical services for congenital anomalies, trauma, and other surgical conditions in children, performed by experienced pediatric surgeons using minimally invasive techniques when appropriate."
        },
        {
          title: "Lactation & Nutrition Counseling",
          description: "Expert guidance on breastfeeding, infant nutrition, and childhood nutrition counseling to ensure optimal growth and development during critical early years."
        }
      ]
    },
    {
      id: 'neurology',
      url: 'neurology',
      title: 'Neurology Hospital in Lucknow',
      icon: Brain,
      iconColor: '#8b5cf6',
      description: {
        intro: [
          "Neurology is a specialized branch of medicine that deals with disorders of the nervous system, including the brain, spinal cord, cranial nerves, peripheral nerves, nerve roots, autonomic nervous system, neuromuscular junction, and muscles. This critical medical specialty addresses complex neurological conditions that can significantly impact cognitive function, movement, and overall quality of life.",
          "The Department of Neurology at MedCare Hospital, the best multispeciality hospital in Lucknow, is equipped with advanced neuroimaging facilities, state-of-the-art diagnostic equipment, and cutting-edge treatment modalities to provide comprehensive neurological care. Our department specializes in both acute neurological emergencies and chronic neurological conditions.",
          "Our Neurology Department is led by highly experienced neurologists in Lucknow with extensive expertise in stroke management, epilepsy care, movement disorders, neurodegenerative diseases, and neurocritical care. The team includes specialists in various subspecialties including stroke neurology, epileptology, movement disorders, and neuro-interventional procedures with years of experience in complex neurological treatments.",
          "We provide 24/7 neurological emergency services including stroke care unit and are equipped with advanced diagnostic facilities like MRI, CT angiography, and electrophysiology labs to ensure rapid diagnosis and immediate treatment of neurological emergencies."
        ],
        facilitiesIntro: "At MedCare Hospital, your trusted neurology hospital in Lucknow, we understand the complexity of neurological disorders and provide comprehensive neurological care with a multidisciplinary approach. Our Neurology Department is committed to delivering precise diagnosis and effective treatment for a wide range of neurological conditions using the latest medical technology and evidence-based treatments."
      },
      facilities: [
        {
          title: "Stroke Care Unit",
          description: "Dedicated stroke care unit with specialized monitoring systems, rapid response protocols, and advanced thrombolytic therapy capabilities for acute stroke management and rehabilitation services.",
          types: [
            "Acute Stroke Management",
            "Thrombolytic Therapy (tPA)",
            "Mechanical Thrombectomy",
            "Stroke Rehabilitation Programs",
            "TIA (Mini-Stroke) Evaluation",
            "Carotid Artery Assessment",
            "Secondary Stroke Prevention"
          ]
        },
        {
          title: "Epilepsy Monitoring & Treatment",
          description: "Comprehensive epilepsy care including long-term EEG monitoring, seizure disorder evaluation, anti-epileptic drug management, and pre-surgical epilepsy assessment for refractory cases."
        },
        {
          title: "Movement Disorders Clinic",
          description: "Specialized care for Parkinson's disease, essential tremor, dystonia, and other movement disorders with advanced treatment options including deep brain stimulation (DBS) evaluation and botulinum toxin therapy."
        },
        {
          title: "Neurophysiology Laboratory",
          description: "Advanced electrophysiology testing including EEG, EMG, nerve conduction studies, evoked potentials, and sleep studies for comprehensive neurological diagnosis and monitoring."
        },
        {
          title: "Headache & Pain Management",
          description: "Specialized headache clinic for migraine, cluster headaches, tension headaches, and chronic pain conditions with comprehensive treatment approaches including preventive therapy and interventional procedures."
        },
        {
          title: "Neurodegenerative Disease Care",
          description: "Comprehensive management of Alzheimer's disease, dementia, multiple sclerosis, ALS, and other neurodegenerative conditions with multidisciplinary care teams and supportive therapies."
        }
      ]
    },
    {
      id: 'general-medicine',
      url: 'general-medicine',
      title: 'General Medicine Hospital in Lucknow',
      icon: UserCheck,
      iconColor: '#059669',
      description: {
        intro: [
          "General Medicine, also known as Internal Medicine, is a comprehensive medical specialty that focuses on the prevention, diagnosis, and treatment of adult diseases. This fundamental branch of medicine provides primary healthcare services and manages a wide spectrum of medical conditions affecting various organ systems in the human body.",
          "The Department of General Medicine at MedCare Hospital, the best multispeciality hospital in Lucknow, serves as the cornerstone of our healthcare services, providing comprehensive medical care for adults with both acute and chronic medical conditions. Our department is equipped with modern diagnostic facilities and treatment protocols to ensure optimal patient outcomes.",
          "Our General Medicine Department is led by highly qualified and experienced physicians in Lucknow with extensive expertise in managing complex medical conditions, preventive healthcare, and coordinated care for patients with multiple comorbidities. The team includes specialists in various areas of internal medicine with decades of clinical experience.",
          "We provide 24/7 general medical emergency services and comprehensive outpatient consultations, equipped with advanced diagnostic capabilities including laboratory services, imaging, and specialized testing to ensure accurate diagnosis and effective treatment planning."
        ],
        facilitiesIntro: "At MedCare Hospital, your trusted general medicine hospital in Lucknow, we provide holistic healthcare services that address the complete spectrum of adult medical conditions. Our General Medicine Department focuses on patient-centered care with evidence-based treatment approaches and preventive healthcare strategies."
      },
      facilities: [
        {
          title: "Comprehensive Health Check-ups",
          description: "Complete health screening packages including routine blood tests, cardiac evaluation, cancer screening, and preventive health assessments tailored to different age groups and risk factors.",
          types: [
            "Executive Health Check-ups",
            "Diabetes Screening & Management",
            "Hypertension Monitoring",
            "Cardiac Risk Assessment",
            "Cancer Screening Programs",
            "Vaccination & Immunization",
            "Occupational Health Services"
          ]
        },
        {
          title: "Chronic Disease Management",
          description: "Specialized care for chronic conditions including diabetes, hypertension, heart disease, kidney disease, and respiratory disorders with comprehensive monitoring and lifestyle counseling."
        },
        {
          title: "Infectious Disease Treatment",
          description: "Expert management of infectious diseases including viral infections, bacterial infections, tropical diseases, and hospital-acquired infections with appropriate antimicrobial therapy."
        },
        {
          title: "Geriatric Medicine",
          description: "Specialized healthcare services for elderly patients focusing on age-related medical conditions, medication management, and comprehensive geriatric assessments."
        },
        {
          title: "Emergency Medicine Services",
          description: "24/7 emergency medical care for acute medical conditions, medical emergencies, and critical care stabilization with experienced emergency physicians."
        }
      ]
    },
    {
      id: 'ent',
      url: 'ent',
      title: 'ENT (Ear, Nose & Throat) Hospital in Lucknow',
      icon: Ear,
      iconColor: '#dc2626',
      description: {
        intro: [
          "ENT (Otolaryngology) is a specialized medical field that focuses on the diagnosis and treatment of disorders related to the ear, nose, throat, head, and neck region. This comprehensive specialty addresses both medical and surgical conditions affecting these vital sensory organs and structures that are essential for hearing, breathing, swallowing, and communication.",
          "The Department of ENT at MedCare Hospital, the best multispeciality hospital in Lucknow, is equipped with state-of-the-art diagnostic equipment, advanced surgical facilities, and cutting-edge treatment modalities to provide comprehensive ENT care. Our department specializes in both conservative management and advanced surgical procedures for ENT disorders.",
          "Our ENT Department is led by highly experienced ENT specialists in Lucknow with extensive expertise in otology, rhinology, laryngology, head and neck surgery, and pediatric ENT conditions. The team includes subspecialists in areas such as cochlear implants, endoscopic sinus surgery, and voice disorders with years of surgical experience.",
          "We provide comprehensive ENT emergency services and are equipped with advanced diagnostic facilities including audiometry, endoscopy, imaging, and voice analysis to ensure accurate diagnosis and optimal treatment outcomes for all ENT conditions."
        ],
        facilitiesIntro: "At MedCare Hospital, your trusted ENT hospital in Lucknow, we understand the importance of healthy ears, nose, and throat for overall quality of life. Our ENT Department provides comprehensive care for all age groups with advanced diagnostic capabilities and minimally invasive surgical techniques."
      },
      facilities: [
        {
          title: "Advanced Hearing Solutions",
          description: "Comprehensive hearing assessment, hearing aid fitting, cochlear implant services, and treatment for all types of hearing loss including conductive, sensorineural, and mixed hearing loss.",
          types: [
            "Audiometry & Hearing Tests",
            "Hearing Aid Services",
            "Cochlear Implant Program",
            "Tinnitus Management",
            "Balance Disorder Treatment",
            "Pediatric Hearing Assessment",
            "Occupational Audiometry"
          ]
        },
        {
          title: "Endoscopic Sinus Surgery",
          description: "Minimally invasive endoscopic techniques for chronic sinusitis, nasal polyps, deviated septum, and other nasal and sinus disorders with faster recovery and better outcomes."
        },
        {
          title: "Voice & Swallowing Disorders",
          description: "Specialized care for voice disorders, vocal cord problems, swallowing difficulties, and speech-related issues with advanced diagnostic techniques and therapeutic interventions."
        },
        {
          title: "Head & Neck Surgery",
          description: "Comprehensive surgical care for head and neck cancers, thyroid disorders, salivary gland diseases, and other head and neck conditions with multidisciplinary approach."
        },
        {
          title: "Pediatric ENT Services",
          description: "Specialized ENT care for children including treatment for ear infections, tonsillitis, adenoid problems, hearing issues in children, and congenital ENT disorders."
        },
        {
          title: "Sleep Apnea Treatment",
          description: "Comprehensive evaluation and treatment for sleep-related breathing disorders including sleep apnea with both surgical and non-surgical treatment options."
        }
      ]
    },
    {
      id: 'gastroenterology',
      url: 'gastroenterology',
      title: 'Gastroenterology Hospital in Lucknow',
      icon: Pill,
      iconColor: '#7c3aed',
      description: {
        intro: [
          "Gastroenterology is a specialized branch of medicine that focuses on the digestive system and its disorders, including diseases affecting the gastrointestinal tract from the mouth to the anus, along with accessory organs of digestion such as the liver, gallbladder, and pancreas. This vital medical specialty addresses both common and complex digestive health issues.",
          "The Department of Gastroenterology at MedCare Hospital, the best multispeciality hospital in Lucknow, is equipped with advanced endoscopic facilities, state-of-the-art diagnostic equipment, and modern treatment modalities to provide comprehensive digestive healthcare. Our department specializes in both diagnostic and therapeutic procedures for gastrointestinal disorders.",
          "Our Gastroenterology Department is led by highly experienced gastroenterologists in Lucknow with extensive expertise in hepatology, inflammatory bowel diseases, pancreatic disorders, and advanced endoscopic procedures. The team includes specialists in therapeutic endoscopy, liver diseases, and gastrointestinal oncology with years of clinical and procedural experience.",
          "We provide comprehensive GI emergency services and are equipped with advanced diagnostic facilities including upper and lower endoscopy, ERCP, EUS, and specialized liver function assessments to ensure accurate diagnosis and effective treatment of all gastrointestinal conditions."
        ],
        facilitiesIntro: "At MedCare Hospital, your trusted gastroenterology hospital in Lucknow, we understand the importance of digestive health for overall well-being. Our Gastroenterology Department provides comprehensive care for all digestive disorders with advanced diagnostic capabilities and minimally invasive treatment approaches."
      },
      facilities: [
        {
          title: "Advanced Endoscopy Services",
          description: "State-of-the-art endoscopic procedures for diagnosis and treatment of gastrointestinal disorders including upper endoscopy, colonoscopy, and therapeutic endoscopic interventions.",
          types: [
            "Upper GI Endoscopy (EGD)",
            "Colonoscopy & Sigmoidoscopy",
            "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
            "Endoscopic Ultrasound (EUS)",
            "Therapeutic Endoscopy",
            "Capsule Endoscopy",
            "Balloon Enteroscopy"
          ]
        },
        {
          title: "Liver Disease Management",
          description: "Comprehensive hepatology services including treatment for hepatitis, fatty liver disease, cirrhosis, liver cancer, and liver transplant evaluation with specialized liver care protocols."
        },
        {
          title: "Inflammatory Bowel Disease (IBD) Care",
          description: "Specialized management of Crohn's disease, ulcerative colitis, and other inflammatory bowel conditions with biological therapies and comprehensive IBD care programs."
        },
        {
          title: "Pancreatic Disorders Treatment",
          description: "Expert care for acute and chronic pancreatitis, pancreatic cancers, and pancreatic cysts with advanced diagnostic and therapeutic endoscopic procedures."
        },
        {
          title: "Gastrointestinal Cancer Care",
          description: "Multidisciplinary approach to GI cancers including stomach, colon, liver, and pancreatic cancers with early detection programs and coordinated oncological care."
        },
        {
          title: "Motility Disorders Clinic",
          description: "Specialized care for gastrointestinal motility disorders including GERD, achalasia, gastroparesis, and functional bowel disorders with advanced diagnostic testing."
        }
      ]
    },

  ];

  const specialties = [
    "PAEDIATRICS & NEONATOLOGY",
    "GYNAECOLOGY AND OBSTETRICS",
    "ORTHOPEDICS",
    "GENERAL MEDICINE",
    "GENERAL SURGERY",
    "CARDIOLOGY",
    "ICU",
    "GASTROENTEROLOGY"
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Service Detail' },
  ];

  // Get service data based on URL parameter (default to orthopedics - index 1)
  const getServiceData = () => {
    if (params?.service) {
      const service = servicesData.find(s => s.url === params.service);
      return service || servicesData[1]; // Default to orthopedics if not found
    }
    return servicesData[1]; // Default to orthopedics (index 1)
  };

  const currentService = getServiceData();
  const IconComponent = currentService.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadCrumbsComponent items={breadcrumbItems} headText={currentService.title} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <section className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <IconComponent className="w-8 h-8 mr-3" style={{ color: currentService.iconColor }} />
                {currentService.title}
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                {currentService.description.intro.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Facilities */}
            <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Facilities Available:</h3>

              <p className="text-gray-700 mb-6">
                {currentService.description.facilitiesIntro}
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-4">The Key Facilities at the Hospital Include:</h4>

              <div className="space-y-8">
                {currentService.facilities.map((facility, index) => (
                  <div key={index} className="border-l-4 border-teal-500 pl-6" style={{ borderColor: '#18978d' }}>
                    <h5 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-orange-500 mr-3" style={{ backgroundColor: currentService.iconColor }}></div>
                      {facility.title}
                    </h5>
                    <p className="text-gray-700 mb-4">{facility.description}</p>

                    {facility.types && (
                      <div className="ml-6">
                        <p className="text-sm font-medium text-gray-600 mb-2">The types included:</p>
                        <ul className="space-y-1">
                          {facility.types.map((type, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                              {type}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Specialties */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-teal-600" style={{ color: '#18978d' }} />
                Our Specialities
              </h3>
              <div className="space-y-2">
                {specialties.map((specialty, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block py-3 px-4 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-md transition-colors border-b border-gray-100 last:border-b-0"
                    style={{ ':hover': { backgroundColor: '#f0fdfa', color: '#18978d' } }}
                  >
                    {specialty}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-lg shadow-lg p-6 text-white" style={{ background: `linear-gradient(135deg, #18978d 0%, #16a085 100%)` }}>
              <h3 className="text-xl font-bold mb-4">Need Medical Assistance?</h3>
              <p className="text-sm opacity-90 mb-4">
                Our expert medical team is available 24/7 to provide you with the best healthcare services.
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center mb-4" style={{ backgroundColor: '#ed8022' }}>
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </button>
              <div className="pt-4 border-t border-teal-400">
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Lucknow, Maharashtra
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Contact</h3>
              <p className="text-red-700 text-sm mb-3">For immediate medical assistance</p>
              <div className="flex items-center justify-between">
                <span className="text-red-800 font-bold text-lg">+91 7897934949</span>
                <Phone className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
import React, { useEffect } from 'react';
import { Activity, Users, Calendar, MapPin, Phone, Stethoscope, Bone, Eye, Baby, Brain, UserCheck, Ear, Pill, } from 'lucide-react';
import BreadCrumbsComponent from '../../components/Breadcums';
import { useParams } from 'react-router-dom';
import { use } from 'react';

const ServiceDetail = () => {
  // Service data array
  const params=useParams();
  const {name}=useParams();
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
      url: 'orthopaedics',
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

    //General Surgen
    {
      id: 'general-surgery',
      url: 'general-surgery',
      title: 'General Surgery Hospital in Lucknow',
      icon: Pill, // Aap apne icon system ke according use karein
      iconColor: '#16a34a',
      description: {
        intro: [
          "General Surgery is a surgical specialty that focuses on the diagnosis, preoperative, operative, and postoperative management of a wide range of conditions affecting the abdomen, digestive tract, soft tissues, and endocrine system. It includes both emergency and elective surgical procedures aimed at treating diseases and improving quality of life.",
          "At MedCare Hospital, one of the best multispeciality hospitals in Lucknow, our Department of General Surgery is equipped with advanced operation theatres, minimally invasive surgical technology, and state-of-the-art infrastructure to provide the highest standard of surgical care.",
          "Our team of highly skilled general surgeons in Lucknow brings extensive expertise in laparoscopic surgeries, trauma care, gastrointestinal surgeries, hernia repair, and more. The surgeons work closely with anesthetists, radiologists, and other specialists to ensure a comprehensive treatment approach.",
          "With patient safety and faster recovery as our primary goals, we follow strict protocols and use evidence-based practices. Whether it’s a complex abdominal surgery or a routine appendectomy, our general surgery team ensures precision and compassionate care at every step."
        ],
        facilitiesIntro: "At MedCare Hospital, your trusted general surgery hospital in Lucknow, we deliver comprehensive surgical solutions using the latest technology and patient-centered practices. Our team focuses on quick recovery and minimal complications to ensure better outcomes for all surgical patients."
      },
      facilities: [
        {
          title: "Laparoscopic (Keyhole) Surgery",
          description: "Minimally invasive surgeries for appendicitis, gallbladder stones, hernia, and more, ensuring less pain, smaller scars, and quicker recovery.",
          types: [
            "Laparoscopic Appendectomy",
            "Laparoscopic Cholecystectomy",
            "Laparoscopic Hernia Repair",
            "Diagnostic Laparoscopy",
            "Laparoscopic Biopsy"
          ]
        },
        {
          title: "Gastrointestinal Surgery",
          description: "Surgical management of gastrointestinal disorders including bowel obstruction, peptic ulcers, gastric tumors, and colon conditions."
        },
        {
          title: "Hernia Surgery",
          description: "Treatment for various types of hernia including inguinal, umbilical, incisional, and femoral hernia using mesh repair techniques."
        },
        {
          title: "Trauma and Emergency Surgery",
          description: "24x7 availability of general surgeons to handle trauma, internal bleeding, and abdominal injuries with quick decision-making and life-saving interventions."
        },
        {
          title: "Breast and Soft Tissue Surgery",
          description: "Surgical care for benign and malignant breast conditions, lipomas, cysts, and abscesses with cosmetic and functional consideration."
        },
        {
          title: "Anorectal Surgery",
          description: "Advanced care for piles, fissures, fistulas, and other colorectal problems with both conventional and laser treatment options."
        }
      ]
    },
    //obstetrics& Gynacology
    {
      id: 'obstetrics-gynecology',
      url: 'obstetrics-gynecology',
      title: 'Obstetrics & Gynaecology Hospital in Lucknow',
      icon: Baby,
      iconColor: '#d946ef',
      description: {
        intro: [
          "Obstetrics & Gynaecology (OB-GYN) is a specialized medical field focused on the health and well-being of women, particularly related to reproductive health, pregnancy, childbirth, and disorders of the female reproductive system.",
          "At MedCare Hospital, the best OB-GYN hospital in Lucknow, we provide a full spectrum of women’s healthcare services. Our experienced team of obstetricians and gynaecologists offers personalized care for women at every stage of life — from adolescence to menopause and beyond.",
          "Our department is equipped with modern diagnostic tools, labor and delivery suites, and advanced surgical facilities. We offer comprehensive maternity care, high-risk pregnancy management, fertility treatments, and minimally invasive gynaecological surgeries.",
          "The OB-GYN specialists at MedCare Hospital are committed to compassionate care, patient education, and empowering women to make informed healthcare decisions, ensuring optimal outcomes for both mothers and babies."
        ],
        facilitiesIntro: "MedCare Hospital’s Obstetrics & Gynaecology Department in Lucknow provides expert and compassionate care for all aspects of women’s health. From pregnancy to post-menopause, our services are designed to support women at every phase with safety, comfort, and dignity."
      },
      facilities: [
        {
          title: "Maternity & Pregnancy Care",
          description: "Comprehensive antenatal, intrapartum, and postnatal care services, including normal deliveries, cesarean sections, and high-risk pregnancy management.",
          types: [
            "Antenatal Checkups",
            "Ultrasound & Foetal Monitoring",
            "Normal & Cesarean Deliveries",
            "High-Risk Pregnancy Care",
            "Postnatal Care & Lactation Support",
            "Family Planning Services"
          ]
        },
        {
          title: "Gynaecological Surgeries",
          description: "Minimally invasive and conventional surgical treatments for gynaecological conditions such as fibroids, ovarian cysts, endometriosis, and uterine abnormalities."
        },
        {
          title: "Infertility & IVF Services",
          description: "Advanced fertility evaluation, hormonal therapy, and assisted reproductive technologies including IUI and IVF by experienced fertility specialists."
        },
        {
          title: "Adolescent & Menopausal Care",
          description: "Special care for young girls and women undergoing menopause, including counselling, hormonal management, and preventive screenings."
        },
        {
          title: "Gynaecological Cancer Screening",
          description: "Screening, diagnosis, and treatment of cervical, ovarian, and uterine cancers with modern diagnostics and multidisciplinary cancer care."
        }
      ]
    },
    //Urology & andrology

    {
      id: 'urology-andrology',
      url: 'urology-andrology',
      title: 'Urology & Andrology Hospital in Lucknow',
      icon: Stethoscope,
      iconColor: '#0ea5e9',
      description: {
        intro: [
          "Urology & Andrology is a specialized medical field that deals with the diagnosis and treatment of disorders related to the male reproductive system and urinary tract in both men and women.",
          "At MedCare Hospital, the leading Urology & Andrology hospital in Lucknow, we offer comprehensive services for kidney, bladder, urethral, and male reproductive health conditions using advanced technology and minimally invasive surgical techniques.",
          "Our experienced team of urologists and andrologists is skilled in treating conditions such as kidney stones, prostate enlargement, urinary incontinence, male infertility, erectile dysfunction, and genital infections with precision and care.",
          "We focus on personalized care plans that prioritize patient comfort, early diagnosis, and long-term wellness through advanced diagnostics, endoscopic procedures, laser treatments, and surgical interventions."
        ],
        facilitiesIntro: "The Urology & Andrology Department at MedCare Hospital in Lucknow delivers advanced and compassionate care for a wide range of urinary and male reproductive conditions, emphasizing minimally invasive treatments and expert follow-up care."
      },
      facilities: [
        {
          title: "Kidney & Bladder Care",
          description: "Diagnosis and treatment of kidney stones, bladder infections, urinary obstruction, and chronic kidney disease with modern techniques.",
          types: [
            "Kidney Stone Removal (PCNL, URS, RIRS)",
            "Bladder Infections & Cystitis",
            "Urinary Tract Infections (UTIs)",
            "Hydronephrosis Treatment",
            "Nephrectomy (Kidney Removal)"
          ]
        },
        {
          title: "Prostate & Urethral Disorders",
          description: "Comprehensive management of prostate enlargement (BPH), urethral strictures, and related urinary symptoms using endoscopic and laser procedures."
        },
        {
          title: "Male Infertility Treatment",
          description: "Advanced evaluation and treatment of male infertility including semen analysis, varicocele surgery, and hormonal therapies."
        },
        {
          title: "Sexual Health & Erectile Dysfunction",
          description: "Confidential diagnosis and treatment of erectile dysfunction, premature ejaculation, and other sexual disorders in men."
        },
        {
          title: "Uro-Oncology Services",
          description: "Diagnosis and treatment of cancers affecting the urinary tract and male reproductive organs including prostate, kidney, and bladder cancer."
        }
      ]
    },

    // Nephrology
    {
      id: 'nephrology',
      url: 'nephrology',
      title: 'Nephrology Hospital in Lucknow',
      icon: Stethoscope,
      iconColor: '#6366f1',
      description: {
        intro: [
          "Nephrology is the medical specialty focused on the diagnosis and treatment of kidney-related diseases. It deals with both acute and chronic kidney conditions, including kidney failure, glomerulonephritis, nephrotic syndrome, and electrolyte imbalances.",
          "At MedCare Hospital, the top nephrology hospital in Lucknow, our department is dedicated to delivering advanced care for patients with kidney disorders through early detection, medical management, dialysis, and kidney transplantation guidance.",
          "Our team of experienced nephrologists utilizes state-of-the-art diagnostic tools and therapeutic techniques to manage complex renal conditions and associated systemic complications like hypertension and diabetes-induced kidney damage.",
          "We provide personalized treatment plans for each patient, aiming to slow disease progression, maintain kidney function, and improve overall quality of life through medical and lifestyle interventions."
        ],
        facilitiesIntro: "MedCare Hospital’s Nephrology Department in Lucknow is committed to offering expert care for kidney diseases with a focus on accurate diagnosis, individualized treatment, and long-term kidney health preservation."
      },
      facilities: [
        {
          title: "Chronic Kidney Disease (CKD) Management",
          description: "Ongoing monitoring and treatment of chronic kidney disease to delay progression and manage associated conditions like hypertension and anemia.",
          types: [
            "Stage-wise CKD Monitoring",
            "Lifestyle & Dietary Counseling",
            "Medication Management",
            "Blood Pressure Control",
            "Diabetes-Related Kidney Care"
          ]
        },
        {
          title: "Acute Kidney Injury (AKI) Treatment",
          description: "Emergency care and hospitalization for sudden kidney failure due to infection, trauma, or other critical conditions."
        },
        {
          title: "Dialysis Services",
          description: "Comprehensive hemodialysis and peritoneal dialysis services with trained staff, modern equipment, and infection control protocols."
        },
        {
          title: "Kidney Transplant Coordination",
          description: "Evaluation and pre/post-operative care for kidney transplant patients, including donor matching and immunosuppressive therapy."
        },
        {
          title: "Electrolyte & Fluid Imbalance Treatment",
          description: "Management of imbalances in sodium, potassium, calcium, and body fluids that commonly affect patients with kidney disorders."
        }
      ]
    },

    //Dental
    {
      id: 'dental',
      url: 'dental',
      title: 'Dental Hospital in Lucknow',
      icon: Stethoscope,
      iconColor: '#f97316',
      description: {
        intro: [
          "Dental care focuses on the diagnosis, prevention, and treatment of conditions affecting the teeth, gums, and overall oral health. It plays a crucial role in maintaining general health, aesthetics, and quality of life.",
          "At MedCare Hospital, the best dental hospital in Lucknow, we offer comprehensive oral healthcare services, including preventive dentistry, cosmetic procedures, restorative treatments, and advanced dental surgeries.",
          "Our dental department is equipped with modern diagnostic tools like digital X-rays and intraoral cameras, ensuring precise treatment planning. Our team includes skilled dentists, orthodontists, and oral surgeons with vast clinical experience.",
          "We follow strict sterilization and hygiene protocols to ensure patient safety and comfort. From routine check-ups to smile makeovers, our dental care is personalized, compassionate, and technologically advanced."
        ],
        facilitiesIntro: "MedCare Hospital’s Dental Department in Lucknow provides complete dental solutions using the latest technologies, expert clinicians, and patient-friendly care. We prioritize your oral health with comfort and precision."
      },
      facilities: [
        {
          title: "Preventive Dentistry",
          description: "Routine check-ups, professional cleaning, fluoride treatments, and sealants to prevent tooth decay and gum disease.",
          types: [
            "Dental Cleaning (Scaling & Polishing)",
            "Oral Health Education",
            "Pit & Fissure Sealants",
            "Fluoride Application",
            "Early Cavity Detection"
          ]
        },
        {
          title: "Restorative & Cosmetic Dentistry",
          description: "Treatment of decayed, damaged, or missing teeth with fillings, crowns, veneers, teeth whitening, and smile correction."
        },
        {
          title: "Orthodontics & Braces",
          description: "Correction of misaligned teeth and jaw structure using metal, ceramic, or invisible braces (Invisalign)."
        },
        {
          title: "Pediatric Dentistry",
          description: "Comprehensive oral care for children including cavity prevention, pulpotomy, and habit-breaking appliances."
        },
        {
          title: "Oral Surgery & Implants",
          description: "Tooth extractions, impacted wisdom tooth surgery, dental implants, and treatment of jaw disorders."
        }
      ]
    },

    //Rheumatology
    {
      id: 'rheumatology',
      url: 'rheumatology',
      title: 'Rheumatology Hospital in Lucknow',
      icon: Bone,
      iconColor: '#7c3aed',
      description: {
        intro: [
          "Rheumatology is a medical specialty that focuses on the diagnosis and treatment of autoimmune and inflammatory diseases that primarily affect the joints, muscles, and connective tissues.",
          "At MedCare Hospital, the top rheumatology hospital in Lucknow, we provide expert care for conditions such as arthritis, lupus, ankylosing spondylitis, vasculitis, and other complex autoimmune disorders with a multidisciplinary approach.",
          "Our experienced rheumatologists utilize advanced diagnostics, lab testing, and imaging to identify and manage diseases early, ensuring reduced pain, better mobility, and improved quality of life for our patients.",
          "We offer personalized treatment plans, including immunotherapy, biologics, pain management, and physiotherapy, to help patients manage chronic symptoms and prevent long-term joint damage."
        ],
        facilitiesIntro: "The Rheumatology Department at MedCare Hospital in Lucknow offers advanced care for autoimmune and inflammatory diseases, combining cutting-edge treatment options with compassionate support for long-term wellness."
      },
      facilities: [
        {
          title: "Arthritis Care",
          description: "Diagnosis and treatment of various types of arthritis including osteoarthritis, rheumatoid arthritis, and psoriatic arthritis.",
          types: [
            "Rheumatoid Arthritis Management",
            "Osteoarthritis Treatment",
            "Psoriatic Arthritis",
            "Gout Management",
            "Early Arthritis Clinics"
          ]
        },
        {
          title: "Autoimmune Disease Treatment",
          description: "Comprehensive care for systemic autoimmune diseases like lupus, Sjögren’s syndrome, scleroderma, and mixed connective tissue disorders."
        },
        {
          title: "Inflammatory Back Pain Management",
          description: "Specialized care for conditions like ankylosing spondylitis and axial spondyloarthritis that cause chronic spinal inflammation."
        },
        {
          title: "Biologic & Immunotherapy Treatments",
          description: "Use of targeted biologic drugs and immunosuppressive therapies to control inflammation and prevent disease progression."
        },
        {
          title: "Rehabilitation & Physiotherapy",
          description: "Supportive therapies to enhance mobility, reduce joint stiffness, and improve function with customized rehab plans."
        }
      ]
    },

    //Pulmonology
    {
      id: 'pulmonology',
      url: 'pulmonology',
      title: 'Pulmonology Hospital in Lucknow',
      icon: Stethoscope,
      iconColor: '#0ea5e9',
      description: {
        intro: [
          "Pulmonology is a medical specialty that deals with diseases involving the respiratory tract and lungs, including asthma, chronic obstructive pulmonary disease (COPD), pneumonia, tuberculosis, and sleep disorders.",
          "At MedCare Hospital, the best pulmonology hospital in Lucknow, our department is equipped to provide advanced diagnostics and treatment for acute and chronic respiratory conditions, including interventional procedures and critical care management.",
          "Our experienced pulmonologists work closely with radiologists and infectious disease specialists to offer comprehensive care for conditions like lung infections, fibrosis, and pleural diseases.",
          "We use cutting-edge technologies including pulmonary function tests (PFT), bronchoscopy, and imaging to diagnose respiratory issues accurately and deliver personalized treatment for improved lung function and quality of life."
        ],
        facilitiesIntro: "MedCare Hospital’s Pulmonology Department in Lucknow provides expert care for a wide range of respiratory conditions using advanced diagnostic tools, evidence-based treatment, and multidisciplinary support."
      },
      facilities: [
        {
          title: "Asthma & COPD Management",
          description: "Diagnosis, monitoring, and long-term management of chronic respiratory diseases such as asthma and chronic obstructive pulmonary disease.",
          types: [
            "Pulmonary Function Testing (PFT)",
            "Bronchodilator Therapy",
            "Inhaler Education",
            "COPD Rehabilitation Programs",
            "Allergy Testing"
          ]
        },
        {
          title: "Lung Infection Treatment",
          description: "Management of bacterial, viral, and fungal infections affecting the lungs such as pneumonia, tuberculosis, and fungal lung infections."
        },
        {
          title: "Sleep Apnea & Respiratory Sleep Disorders",
          description: "Comprehensive evaluation and treatment of sleep-related breathing disorders including obstructive sleep apnea (OSA)."
        },
        {
          title: "Bronchoscopy & Thoracentesis",
          description: "Minimally invasive procedures for diagnosing and treating lung and pleural diseases, including biopsy and fluid drainage."
        },
        {
          title: "Critical Care & Ventilator Support",
          description: "Advanced care for patients with respiratory failure and severe lung disease requiring ICU admission and ventilatory support."
        }
      ]
    },

    //Dermatology
    {
      id: 'dermatology',
      url: 'dermatology',
      title: 'Dermatology Hospital in Lucknow',
      icon: UserCheck,
      iconColor: '#eab308',
      description: {
        intro: [
          "Dermatology is the branch of medicine that deals with the diagnosis and treatment of skin, hair, and nail disorders. It includes both medical and cosmetic dermatology, catering to a wide range of conditions from acne and eczema to skin cancer and cosmetic skin concerns.",
          "At MedCare Hospital, the leading dermatology hospital in Lucknow, we provide comprehensive care using advanced laser therapies, cosmetic dermatology procedures, and clinical treatments for chronic skin diseases.",
          "Our team of experienced dermatologists specializes in managing both acute and chronic dermatological issues, offering personalized care for conditions like psoriasis, vitiligo, fungal infections, dermatitis, and more.",
          "We are equipped with modern diagnostic tools such as dermoscopy and patch testing, along with aesthetic technologies including laser resurfacing, skin rejuvenation, and pigmentation treatments."
        ],
        facilitiesIntro: "MedCare Hospital’s Dermatology Department in Lucknow offers advanced skincare solutions using state-of-the-art technology and expert clinical care, ensuring both therapeutic and aesthetic skin health."
      },
      facilities: [
        {
          title: "General Skin Treatments",
          description: "Diagnosis and treatment for common skin conditions such as acne, eczema, psoriasis, dermatitis, and fungal infections.",
          types: [
            "Acne & Pimple Care",
            "Fungal & Bacterial Skin Infection Treatment",
            "Psoriasis & Eczema Management",
            "Skin Allergy Testing (Patch Test)",
            "Skin Biopsy"
          ]
        },
        {
          title: "Cosmetic Dermatology",
          description: "Non-invasive treatments for pigmentation, wrinkles, scars, and skin rejuvenation including chemical peels and Botox."
        },
        {
          title: "Laser & Aesthetic Treatments",
          description: "Advanced laser therapies for hair removal, skin resurfacing, tattoo removal, scar reduction, and pigmentation correction."
        },
        {
          title: "Hair & Scalp Treatments",
          description: "Care for hair loss, dandruff, alopecia areata, and PRP therapy for scalp rejuvenation and hair regrowth."
        },
        {
          title: "Nail & Vitiligo Treatment",
          description: "Specialized care for nail infections, discoloration, vitiligo management with phototherapy and topical treatments."
        }
      ]
    },

    //Psychiatry
    {
      id: 'psychiatry',
      url: 'psychiatry',
      title: 'Psychiatry Hospital in Lucknow',
      icon: Brain,
      iconColor: '#a855f7',
      description: {
        intro: [
          "Psychiatry is a medical specialty focused on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders. It encompasses everything from anxiety and depression to schizophrenia and addiction.",
          "At MedCare Hospital, the best psychiatry hospital in Lucknow, our department is dedicated to improving mental well-being through compassionate, confidential, and evidence-based care tailored to each individual.",
          "Our team of qualified psychiatrists, psychologists, and counselors provides a holistic approach to mental health, integrating medication, therapy, and psychosocial support to ensure recovery and long-term stability.",
          "We offer outpatient consultations, inpatient psychiatric care, and emergency intervention services, using the latest diagnostic tools and therapeutic techniques including CBT, psychotherapy, and de-addiction programs."
        ],
        facilitiesIntro: "MedCare Hospital’s Psychiatry Department in Lucknow offers comprehensive mental health services through experienced professionals, advanced therapy techniques, and a supportive healing environment."
      },
      facilities: [
        {
          title: "Anxiety & Depression Treatment",
          description: "Diagnosis and treatment of common mood disorders through medication, cognitive-behavioral therapy (CBT), and counseling.",
          types: [
            "Generalized Anxiety Disorder",
            "Major Depressive Disorder",
            "Panic Attacks & Phobias",
            "Postpartum Depression",
            "CBT & Psychotherapy"
          ]
        },
        {
          title: "Child & Adolescent Psychiatry",
          description: "Specialized care for emotional and behavioral issues in children including ADHD, autism spectrum disorders, and school anxiety."
        },
        {
          title: "Psychosis & Schizophrenia Management",
          description: "Long-term treatment and rehabilitation for serious mental illnesses like schizophrenia, bipolar disorder, and delusional disorders."
        },
        {
          title: "Addiction & Substance Abuse",
          description: "De-addiction programs for alcohol, drugs, and behavioral addictions with medication and structured rehabilitation therapy."
        },
        {
          title: "Stress & Sleep Disorder Clinic",
          description: "Management of chronic stress, burnout, insomnia, and other sleep-related issues with lifestyle therapy and relaxation techniques."
        }
      ]
    },

    //Oncology
    {
      id: 'oncology',
      url: 'oncology',
      title: 'Oncology Hospital in Lucknow',
      icon: Pill,
      iconColor: '#dc2626',
      description: {
        intro: [
          "Oncology is the branch of medicine that specializes in the prevention, diagnosis, and treatment of cancer. It involves medical, surgical, and radiation therapies tailored to the type and stage of cancer.",
          "At MedCare Hospital, the best oncology hospital in Lucknow, we offer comprehensive cancer care with state-of-the-art diagnostic tools, personalized treatment plans, and a multidisciplinary team approach.",
          "Our Oncology Department is led by experienced medical oncologists, surgical oncologists, and radiation specialists who collaborate to deliver targeted, evidence-based treatment for all major cancer types.",
          "We provide advanced chemotherapy, immunotherapy, radiotherapy, and palliative care, ensuring holistic cancer management with emotional and psychological support for patients and families."
        ],
        facilitiesIntro: "MedCare Hospital’s Oncology Department in Lucknow delivers world-class cancer care through cutting-edge technology, expert specialists, and compassionate support throughout the treatment journey."
      },
      facilities: [
        {
          title: "Medical Oncology",
          description: "Chemotherapy, targeted therapy, and immunotherapy for treating various cancers including breast, lung, colon, and blood cancers.",
          types: [
            "Daycare Chemotherapy Center",
            "Targeted Drug Therapy",
            "Hormonal Therapy",
            "Immunotherapy",
            "Hematologic Malignancy Management"
          ]
        },
        {
          title: "Surgical Oncology",
          description: "Advanced cancer surgeries for tumor removal, reconstruction, and organ preservation by experienced surgical oncologists."
        },
        {
          title: "Radiation Therapy",
          description: "Precision radiation therapy including 3D-CRT, IMRT, IGRT, and brachytherapy for effective and safe tumor control."
        },
        {
          title: "Cancer Screening & Early Detection",
          description: "Regular cancer screening programs for breast, cervical, prostate, oral, and colon cancers to enable early diagnosis."
        },
        {
          title: "Palliative & Supportive Care",
          description: "Symptom management, pain relief, and emotional support for advanced cancer patients and their families."
        }
      ]
    },

    //Icu-critical-care
    {
      id: 'icu-critical-care',
      url: 'icu-critical-care',
      title: 'ICU & Critical Care Hospital in Lucknow',
      icon: Activity,
      iconColor: '#1d4ed8',
      description: {
        intro: [
          "ICU (Intensive Care Unit) and Critical Care Medicine focus on the management of patients with life-threatening conditions requiring comprehensive and continuous monitoring and treatment.",
          "At MedCare Hospital, the top ICU and Critical Care hospital in Lucknow, we provide state-of-the-art intensive care facilities managed by highly skilled intensivists, critical care nurses, and multidisciplinary specialists.",
          "Our ICU is equipped with advanced life-support systems, ventilators, central monitoring, bedside imaging, and infection control infrastructure to ensure the highest level of patient safety and care.",
          "We follow international critical care protocols and individualized treatment plans for trauma cases, cardiac arrests, sepsis, multi-organ failure, post-surgical recovery, and complex medical emergencies."
        ],
        facilitiesIntro: "MedCare Hospital’s ICU & Critical Care Department in Lucknow delivers 24/7 emergency and intensive care services with cutting-edge technology, rapid response, and expert clinical support."
      },
      facilities: [
        {
          title: "Advanced ICU Setup",
          description: "Fully equipped ICUs with ventilators, cardiac monitors, infusion pumps, defibrillators, and round-the-clock monitoring.",
          types: [
            "Medical ICU (MICU)",
            "Surgical ICU (SICU)",
            "Neuro ICU",
            "Cardiac ICU (CCU)",
            "Isolation ICU"
          ]
        },
        {
          title: "24/7 Critical Care Team",
          description: "Intensivists, anesthesiologists, and critical care nurses available around the clock for rapid and expert interventions."
        },
        {
          title: "Emergency & Trauma Management",
          description: "Immediate resuscitation and stabilization of patients with cardiac arrest, respiratory failure, shock, trauma, or poisoning."
        },
        {
          title: "Post-Operative Intensive Monitoring",
          description: "Careful monitoring of high-risk post-surgical patients to prevent complications and ensure safe recovery."
        },
        {
          title: "Multisystem Support & Organ Monitoring",
          description: "Support for renal failure, ventilatory care, fluid balance, infection management, and nutrition for critically ill patients."
        }
      ]
    },

    //Endocrinology
    {
      id: 'endocrinology',
      url: 'endocrinology',
      title: 'Endocrinology Hospital in Lucknow',
      icon: Pill,
      iconColor: '#a855f7',
      description: {
        intro: [
          "Endocrinology is a medical specialty focusing on the diagnosis and treatment of hormone-related disorders and the endocrine system, including glands like the thyroid, pancreas, pituitary, and adrenal glands.",
          "At MedCare Hospital, the top endocrinology hospital in Lucknow, our department offers comprehensive care for patients with hormonal imbalances and metabolic disorders through advanced diagnostics and personalized treatments.",
          "Our team of experienced endocrinologists and diabetologists use cutting-edge technology and evidence-based care for managing chronic conditions such as diabetes, thyroid disorders, PCOS, osteoporosis, and growth issues.",
          "We aim to restore hormonal balance and improve quality of life through lifestyle modification, medication, and continuous monitoring tailored to each patient's condition."
        ],
        facilitiesIntro: "MedCare Hospital’s Endocrinology Department in Lucknow delivers expert care for endocrine disorders with precision diagnostics, specialist doctors, and patient-centered treatment plans."
      },
      facilities: [
        {
          title: "Diabetes Management",
          description: "Comprehensive evaluation and treatment plans for Type 1, Type 2, and gestational diabetes with glucose monitoring and insulin therapy.",
          types: [
            "Blood Sugar Monitoring",
            "HbA1c Testing",
            "Insulin Pump Therapy",
            "Diabetes Education & Diet Counseling"
          ]
        },
        {
          title: "Thyroid Disorder Treatment",
          description: "Diagnosis and treatment of hypothyroidism, hyperthyroidism, goiter, and thyroid nodules with hormonal therapy and imaging."
        },
        {
          title: "Hormonal Imbalance Management",
          description: "Management of adrenal, pituitary, and parathyroid disorders through lab testing, medication, and hormonal replacement therapies."
        },
        {
          title: "PCOS & Reproductive Endocrinology",
          description: "Diagnosis and treatment of Polycystic Ovary Syndrome (PCOS) and other hormonal issues affecting fertility in women."
        },
        {
          title: "Osteoporosis & Growth Disorders",
          description: "Evaluation and treatment for bone density loss, delayed growth in children, and other metabolic bone conditions."
        }
      ]
    }





  ];

  const specialties = [
    "PAEDIATRICS & NEONATOLOGY",
    "GYNAECOLOGY AND OBSTETRICS",
    "ORTHOPEDICS",
    "GENERAL MEDICINE",
    "GENERAL SURGERY",
    "CARDIOLOGY",
    "ICU",
    "GASTROENTEROLOGY",
    "General-Surgery",
    "Obstetrics-Gynecology",
    "Urology-Andrology",
    "Nephrology",
    "Dental",
    "Rheumatology",
    "Pulmonology",
    "Dermatology",
    "Psychiatry",
    "Oncology",
    "Icu-Critical-Care",
    "Endocrinology"
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Service Detail' },
  ];

  // Get service data based on URL parameter (default to orthopedics - index 1)
  const getServiceData = () => {
      console.log("params",params.name);
      
    if (params?.name) {
      console.log("Department apge",);
      const service = servicesData.find((s) =>{ 
          console.log(s.url); 
        return s.url === name
      });
      return service || servicesData[1]; // Default to orthopedics if not found
    }
    // return servicesData[1]; // Default to orthopedics (index 1)
  };
  useEffect(()=>{
     getServiceData();
  },[name])
           
  const currentService = getServiceData();
   console.log("currentService",currentService);
   
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
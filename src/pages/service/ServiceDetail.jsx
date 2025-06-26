import React, { useEffect, useState } from 'react';
import {
  Bone, Phone, Activity, CheckCircle, AlertTriangle, Shield,
  Star, MapPin, Clock, Stethoscope, Award, Users,
  Microscope, Heart, MessageCircle, Target
} from 'lucide-react';

import BreadCrumbs from '../../components/Breadcums';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ServiceBreadcums from './ServiceBrad';

const OrthopaedicDepartment = () => {
  const primaryColor = "#18978d";
  const secondaryColor = "#ed8022";

  const [activeService, setActiveService] = useState(null);
         const navigate=useNavigate()

  const tabs = [];

  const caseStats = [
    {
      count: '5000+',
      title: 'Successful Surgeries',
      description: 'Complex joint replacements, fracture repairs, and spine surgeries completed with excellent outcomes'
    },
    {
      count: '15+',
      title: 'Years Experience',
      description: 'Decades of combined expertise in orthopaedic care and surgical excellence'
    },
    {
      count: '24/7',
      title: 'Emergency Care',
      description: 'Round-the-clock availability for urgent orthopaedic emergencies and trauma cases'
    },
    {
      count: '98%',
      title: 'Patient Satisfaction',
      description: 'High success rates and positive patient outcomes across all treatment categories'
    }
  ];

  const conditionsTreated = [
    'Osteoarthritis & Rheumatoid Arthritis – pain, stiffness, joint deformity',
    'Fractures & Dislocations – from simple to complex injuries',
    'Ligament & Meniscus Tears – e.g., ACL, PCL, rotator tears',
    'Sports Injuries – knee, shoulder, ankle injuries in active patients',
    'Back Pain & Sciatica – due to muscle strain or spinal issues',
    'Herniated & Slipped Discs – causing nerve compression',
    'Spine Deformities – scoliosis, kyphosis in adults and children',
    'Frozen Shoulder & Tennis Elbow – repetitive stress conditions',
    'Osteomyelitis – bone infections',
    'Pediatric Orthopaedics – congenital and growth‑related issues'
  ];

  const procedures = [
    {
      name: 'Arthroscopy (knee, shoulder, ankle)',
      description: 'Minimally invasive for diagnostics & repair'
    },
    {
      name: 'Total Joint Replacement (hip, knee)',
      description: 'Restoring mobility and pain relief'
    },
    {
      name: 'Fracture Fixation',
      description: 'Plate, rod or screw stabilization'
    },
    {
      name: 'Ligament Reconstruction',
      description: 'ACL/PCL or rotator cuff repairs'
    },
    {
      name: 'Spinal Fusion & Disc Replacement',
      description: 'Correcting deformities, relieving nerve pressure'
    },
    {
      name: 'Tendon Repair & Realignment',
      description: 'For muscle/structure support'
    },
    {
      name: 'Bone Biopsy & Tumor Removal',
      description: 'Diagnostic and therapeutic surgeries'
    }
  ];

  const treatments = [
    {
      title: 'Medication & Pain Management',
      description: 'Anti-inflammatories, analgesics for comprehensive pain control'
    },
    {
      title: 'Physiotherapy & Personalized Rehab',
      description: 'Full recovery plans tailored to individual patient needs'
    },
    {
      title: 'Corticosteroid Injections & Visco-supplementation',
      description: 'Targeted treatments for joint inflammation and lubrication'
    },
    {
      title: 'PRP (Platelet-Rich Plasma) Therapy',
      description: 'Regenerative approach using the body\'s natural healing factors'
    },
    {
      title: 'Orthotic Supports & Mobility Aids',
      description: 'Braces, walkers, and supportive devices for enhanced mobility'
    },
    {
      title: 'Lifestyle Counseling',
      description: 'Posture, diet, exercise guidance for long-term wellness'
    }
  ];

  const symptoms = [
    {
      text: 'Persistent or deep-seated joint/bone pain',
      severity: 'high'
    },
    {
      text: 'Swelling, redness, or restricted motion',
      severity: 'medium'
    },
    {
      text: 'Difficulty walking, climbing stairs, or weight-bearing',
      severity: 'high'
    },
    {
      text: 'Audible "popping" sounds or grinding sensation',
      severity: 'medium'
    },
    {
      text: 'Radiating back or limb pain',
      severity: 'high'
    },
    {
      text: 'Visible deformities or bone protrusions',
      severity: 'high'
    },
    {
      text: 'Recurrent bone/joint infections or weakness',
      severity: 'high'
    }
  ];

  const sideEffects = [
    {
      text: 'Post-op pain, swelling, bruising (managed medically)',
      risk: 'expected'
    },
    {
      text: 'Infection or bleeding – rare, treated promptly',
      risk: 'rare'
    },
    {
      text: 'Stiffness or reduced flexibility – improved with PT',
      risk: 'common'
    },
    {
      text: 'Anesthesia after-effects – fatigue, nausea',
      risk: 'expected'
    },
    {
      text: 'Blood clots – minimized with early movement and prophylaxis',
      risk: 'rare'
    },
    {
      text: 'Physical therapy requirement – for optimizing outcomes',
      risk: 'expected'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Expert Surgeons & Staff',
      description: 'Years of orthopaedic expertise with proven track record'
    },
    {
      icon: Microscope,
      title: 'Cutting-Edge Facilities',
      description: 'Digital imaging, smart OTs and latest medical technology'
    },
    {
      icon: Clock,
      title: 'Timely Emergency Response',
      description: '24/7 care & stable transfers for urgent cases'
    },
    {
      icon: Heart,
      title: 'Personalized Care Plans',
      description: 'Treatment designed around your specific needs'
    },
    {
      icon: MessageCircle,
      title: 'Transparent Communication',
      description: 'Clear costs, realistic expectations, honest guidance'
    },
    {
      icon: Target,
      title: 'Holistic Approach',
      description: 'Physical, psychological, and lifestyle recovery focus'
    }
  ];

const specialties = [
  "Orthopaedics",
  "Ophthalmology",
  "Pediatrics",
  "Neurology",
  "General Medicine",
  "ENT",
  "Gastrology",
  "General Surgery",
  "Obstetrics & Gynaecology",
  "Urology",
  "Nephrology",
  "Dental",
  "Hematology",
  "Pulmonology",
  "Dermatology",
  "Psychiatry",
  "Cardiology",
  "Oncology",
  "ICU and Critical Care",
  "Rheumatology",
  "Endocrinology"
];


  // const breadcrumbItems = [
  //   { label: 'Home', href: '/' },
  //   { label: 'Department' },
  //   { label: 'orthopaedic' }
  // ];

  const serviceDetails = [
    {
      departmentTitle: "Orthopedic Surgery Department",
      subtitle: "Advanced Bone & Joint Care",
      heroDescription: "Our orthopedic department provides comprehensive care for all musculoskeletal conditions with state-of-the-art facilities and experienced surgeons dedicated to helping you regain mobility and live pain-free.",
      treatmentExperienceTitle: "Our Treatment Experience",
      treatmentExperienceDesc: "With over 15 years of specialized experience in orthopedic care, our team has successfully treated thousands of patients with various bone and joint conditions.",
      successRateTitle: "High Success Rate",
      successRateDesc: "Our advanced surgical techniques and comprehensive rehabilitation programs have achieved a 95% patient satisfaction rate with excellent long-term outcomes.",
      conditionsTitle: "Conditions We Treat",
      conditionsDesc: "We specialize in treating a wide range of orthopedic conditions from simple fractures to complex joint replacements.",
      proceduresTitle: "Procedures & Surgeries",
      proceduresDesc: "Our surgical team performs various advanced procedures using minimally invasive techniques whenever possible.",
      rehabTitle: "Treatment & Rehabilitation",
      rehabDesc: "Comprehensive rehabilitation programs designed to restore function and prevent future injuries.",
      symptomsTitle: "Symptoms to Watch Out For",
      symptomsDesc: "Early detection and treatment of these symptoms can prevent more serious complications.",
      sideEffectsTitle: "Potential Side Effects",
      sideEffectsDesc: "Understanding potential side effects helps in making informed treatment decisions.",
      caseStats: [
        {
          count: "5000+",
          title: "Successful Surgeries",
          description: "Complex orthopedic surgeries performed with excellent outcomes"
        },
        {
          count: "98%",
          title: "Patient Satisfaction",
          description: "Patients report high satisfaction with treatment and care quality"
        },
        {
          count: "15+",
          title: "Years Experience",
          description: "Dedicated experience in orthopedic surgery and patient care"
        },
        {
          count: "24/7",
          title: "Emergency Care",
          description: "Round-the-clock emergency orthopedic care available"
        }
      ],
      conditionsTreated: [
        "Arthritis and Joint Pain",
        "Fractures and Trauma",
        "Sports Injuries",
        "Spine Disorders",
        "Joint Replacement Surgery",
        "Ligament and Tendon Injuries",
        "Bone Tumors",
        "Pediatric Orthopedic Conditions"
      ],
      procedures: [
        {
          name: "Total Knee Replacement",
          description: "Complete replacement of knee joint for severe arthritis or injury"
        },
        {
          name: "Hip Replacement Surgery",
          description: "Advanced hip joint replacement for improved mobility and pain relief"
        },
        {
          name: "Arthroscopic Surgery",
          description: "Minimally invasive procedure for joint problems using small incisions"
        },
        {
          name: "Spinal Fusion",
          description: "Surgical procedure to treat spinal instability and disc problems"
        },
        {
          name: "ACL Reconstruction",
          description: "Surgical repair of torn anterior cruciate ligament in the knee"
        }
      ],
      treatments: [
        {
          title: "Physical Therapy",
          description: "Customized exercise programs to restore strength and mobility"
        },
        {
          title: "Pain Management",
          description: "Comprehensive pain control strategies including medications and injections"
        },
        {
          title: "Occupational Therapy",
          description: "Training to help patients return to daily activities and work"
        },
        {
          title: "Post-Surgical Care",
          description: "Specialized care and monitoring during recovery period"
        }
      ],
      symptoms: [
        { text: "Persistent joint pain lasting more than a few days" },
        { text: "Swelling, redness, or warmth around joints" },
        { text: "Limited range of motion or stiffness" },
        { text: "Difficulty bearing weight or walking" },
        { text: "Numbness or tingling in extremities" },
        { text: "Visible deformity after injury" }
      ],
      sideEffects: [
        { text: "Temporary pain and swelling at surgical site" },
        { text: "Risk of infection (less than 1% with proper care)" },
        { text: "Blood clots in rare cases" },
        { text: "Temporary stiffness during recovery" },
        { text: "Possible need for revision surgery in future" }
      ],
      url: "orthopaedics"
    },
    {
      departmentTitle: "Ophthalmology at Ashaali Hospital",
      subtitle: "Expert Eye Care for Clearer Vision and Healthier Lives",
      heroDescription: "Our Ophthalmology Department offers advanced diagnosis, treatment, and surgical care for a full range of eye disorders. With cutting-edge equipment and a skilled team of eye specialists, we provide personalized care — from routine eye exams to complex surgeries — to protect and restore your vision at every stage of life.",
      treatmentExperienceTitle: "Our Treatment Experience",
      treatmentExperienceDesc: "With experienced ophthalmologists and retina specialists, we use advanced laser and microsurgical facilities to provide comprehensive eye care for all ages.",
      successRateTitle: "Why Choose Ashaali Hospital for Eye Care?",
      successRateDesc: "Advanced Laser & Microsurgical Facilities with Pediatric & Geriatric Eye Care Available, On-site Optical & Diagnostic Lab, Quick Appointments & Minimal Waiting Time, and Transparent Consultation and Post-care Guidance.",
      conditionsTitle: "Conditions We Treat",
      conditionsDesc: "We manage both common and serious eye conditions, including:",
      proceduresTitle: "Surgeries & Treatments Offered",
      proceduresDesc: "Our eye specialists are skilled in both laser-based and conventional surgical procedures:",
      rehabTitle: "Diagnostic Tools & Procedures",
      rehabDesc: "We use modern diagnostic technologies to detect problems early and provide precise care:",
      symptomsTitle: "Common Symptoms to Watch",
      symptomsDesc: "Seek an ophthalmologist if you notice:",
      sideEffectsTitle: "Possible Side Effects of Eye Treatments/Surgery",
      sideEffectsDesc: "Most treatments are safe, but potential side effects may include:",
      caseStats: [
        {
          count: "10,000+",
          title: "Eye Surgeries",
          description: "Successful cataract, LASIK and other eye surgeries performed"
        },
        {
          count: "99%",
          title: "Success Rate",
          description: "High success rate in vision restoration and eye treatments"
        },
        {
          count: "20+",
          title: "Years Experience",
          description: "Experienced ophthalmologists and retina specialists"
        },
        {
          count: "24/7",
          title: "Emergency Care",
          description: "Round-the-clock emergency eye care available"
        }
      ],
      conditionsTreated: [
        "Cataracts – Cloudy vision due to lens opacification",
        "Glaucoma – Increased eye pressure damaging the optic nerve",
        "Refractive Errors – Myopia, Hyperopia, Astigmatism, Presbyopia",
        "Diabetic Retinopathy – Vision issues from diabetes-related damage",
        "Macular Degeneration – Loss of central vision, common in aging",
        "Dry Eye Syndrome – Irritation due to poor tear production",
        "Conjunctivitis (Pink Eye) – Allergic, viral, or bacterial infections",
        "Keratoconus – Thinning of the cornea",
        "Squint & Lazy Eye – Common in children, treated early",
        "Corneal Infections & Injuries"
      ],
      procedures: [
        {
          name: "Cataract Surgery (Phacoemulsification with IOL)",
          description: "Advanced cataract removal with intraocular lens implantation"
        },
        {
          name: "Lasik & Refractive Surgery",
          description: "Laser vision correction for refractive errors"
        },
        {
          name: "Glaucoma Surgery & Laser Trabeculoplasty",
          description: "Surgical and laser treatments to reduce eye pressure"
        },
        {
          name: "Vitrectomy",
          description: "Surgical procedure for retinal disorders and vitreous problems"
        },
        {
          name: "Squint Correction Surgery",
          description: "Surgical correction of eye alignment problems"
        },
        {
          name: "Corneal Transplant (Keratoplasty)",
          description: "Replacement of damaged corneal tissue"
        },
        {
          name: "Intravitreal Injections",
          description: "Treatment for Diabetic Retinopathy and AMD"
        },
        {
          name: "Eyelid & Tear Duct Surgeries",
          description: "Corrective surgeries for eyelid and tear duct problems"
        }
      ],
      treatments: [
        {
          title: "Slit Lamp Examination",
          description: "Detailed examination of eye structures using magnification"
        },
        {
          title: "OCT (Optical Coherence Tomography)",
          description: "Advanced imaging of retinal layers and optic nerve"
        },
        {
          title: "Visual Field Testing",
          description: "Assessment of peripheral vision and visual field defects"
        },
        {
          title: "Fundus Photography & Angiography",
          description: "Detailed imaging of retina and blood vessels"
        },
        {
          title: "Tonometry (Eye Pressure Check)",
          description: "Measurement of intraocular pressure for glaucoma screening"
        },
        {
          title: "Ultrasound B-scan",
          description: "Ultrasound imaging when direct visualization is not possible"
        }
      ],
      symptoms: [
        { text: "Blurred, double, or dim vision" },
        { text: "Sudden flashes or floaters" },
        { text: "Eye redness, discharge, or swelling" },
        { text: "Pain or pressure in or around the eyes" },
        { text: "Difficulty reading or seeing at night" },
        { text: "Sensitivity to light" },
        { text: "Watering or dryness in eyes" },
        { text: "Eye strain or headaches" }
      ],
      sideEffects: [
        { text: "Mild irritation or dryness after eye drops" },
        { text: "Blurred vision temporarily post-surgery" },
        { text: "Sensitivity to light for a few days" },
        { text: "Rare risks of infection, bleeding, or intraocular pressure rise" },
        { text: "Need for glasses or re-treatment in some refractive cases" }
      ],
      url: "ophthalmology"
    },
    {
      departmentTitle: "Pediatrics & Neonatology Department",
      subtitle: "Compassionate, Specialized Care for Newborns, Infants & Children",
      heroDescription: "At Ashaali Hospital, our Pediatrics & Neonatology Department is dedicated to the health and development of children — from birth through adolescence. We offer comprehensive care for newborns, infants, toddlers, and teens with a focus on prevention, early diagnosis, and personalized treatment.",
      treatmentExperienceTitle: "Our Treatment Experience",
      treatmentExperienceDesc: "Our expert pediatricians, neonatologists, and nursing staff create a nurturing, child-friendly environment to make each visit stress-free and safe with years of specialized experience in child healthcare.",
      successRateTitle: "Family-Centered Care",
      successRateDesc: "Our parent-inclusive, family-centered care approach ensures comprehensive support for both children and parents throughout the treatment journey with round-the-clock emergency pediatric care.",
      conditionsTitle: "Conditions We Treat",
      conditionsDesc: "We manage a wide range of acute and chronic conditions in children from newborn complications to developmental disorders.",
      proceduresTitle: "Services & Facilities",
      proceduresDesc: "Our pediatric and neonatal care includes preventive, diagnostic, and intensive support with advanced life-saving equipment.",
      rehabTitle: "Treatment & Support",
      rehabDesc: "Comprehensive care programs including nutritional counseling, growth monitoring, and parental support services.",
      symptomsTitle: "Symptoms to Watch in Children",
      symptomsDesc: "Parents should consult a pediatrician if their child shows any of these warning signs for early intervention.",
      sideEffectsTitle: "Possible Side Effects",
      sideEffectsDesc: "While most pediatric treatments are safe, understanding potential mild and temporary effects helps parents make informed decisions.",
      caseStats: [
        {
          count: "24/7",
          title: "Emergency Care",
          description: "Round-the-clock emergency pediatric care available"
        },
        {
          count: "100%",
          title: "Family-Centered",
          description: "Parent-inclusive care approach for comprehensive support"
        },
        {
          count: "NICU/PICU",
          title: "Advanced Units",
          description: "Specialized intensive care units for critical newborn and pediatric care"
        },
        {
          count: "Full",
          title: "Vaccination Program",
          description: "Complete immunization services as per IAP schedule"
        }
      ],
      conditionsTreated: [
        "Newborn complications (Prematurity, low birth weight, birth asphyxia)",
        "Respiratory issues (Asthma, bronchiolitis, pneumonia)",
        "Infections (Fever, flu, ear infections, gastroenteritis)",
        "Growth and nutrition disorders (Malnutrition, obesity, anemia)",
        "Developmental delays (Speech, motor skills, autism spectrum disorders)",
        "Pediatric jaundice (Especially in newborns)",
        "Seizures and neurological disorders",
        "Congenital abnormalities (Heart defects, metabolic disorders)",
        "Allergies & Skin issues (Eczema, food allergies)"
      ],
      procedures: [
        {
          name: "NICU Care",
          description: "Neonatal Intensive Care Unit for critical newborn care and life support"
        },
        {
          name: "PICU Care",
          description: "Pediatric Intensive Care Unit for emergency and life-threatening conditions"
        },
        {
          name: "Phototherapy",
          description: "Specialized light treatment for neonatal jaundice management"
        },
        {
          name: "Newborn Screening",
          description: "Comprehensive genetic testing and health screening for newborns"
        },
        {
          name: "Vaccination Programs",
          description: "Complete immunization services following IAP schedule guidelines"
        }
      ],
      treatments: [
        {
          title: "Well-baby Clinics",
          description: "Routine checkups and health monitoring for healthy child development"
        },
        {
          title: "Nutritional Counseling",
          description: "Growth monitoring and dietary guidance for optimal child nutrition"
        },
        {
          title: "Parental Support",
          description: "Counseling and breastfeeding support for new parents"
        },
        {
          title: "Developmental Tracking",
          description: "Child growth and development monitoring with early intervention"
        }
      ],
      symptoms: [
        { text: "Persistent fever or cough in children" },
        { text: "Poor feeding or unexplained weight loss" },
        { text: "Lethargy, drowsiness, or excessive crying" },
        { text: "Breathing difficulty or respiratory distress" },
        { text: "Vomiting or persistent diarrhea" },
        { text: "Skin rashes, swelling, or unusual behavior" },
        { text: "Developmental or speech delays" },
        { text: "Yellowing of skin or eyes in newborns" }
      ],
      sideEffects: [
        { text: "Low-grade fever or soreness after vaccination" },
        { text: "Mild diarrhea or nausea with antibiotics" },
        { text: "Temporary fussiness or drowsiness" },
        { text: "Rare allergic reactions (monitored and treated quickly)" },
        { text: "Temporary discomfort during medical procedures" }
      ],
      url: "pediatrics"
    },
    {
      departmentTitle: "Neurology Department",
      subtitle: "Expert Care for Brain, Spine & Nervous System Disorders",
      heroDescription: "At Ashaali Hospital, our Neurology Department offers advanced care for diseases affecting the brain, spinal cord, nerves, and muscles. Our team of neurologists, neurophysicians, and rehabilitation experts use state-of-the-art diagnostics and treatment protocols to provide accurate diagnosis, early intervention, and long-term management of neurological conditions.",
      treatmentExperienceTitle: "Our Treatment Experience",
      treatmentExperienceDesc: "Our experienced neurologists and neuro-specialists provide comprehensive care from common issues like headaches to complex disorders like epilepsy or stroke with advanced diagnostic capabilities.",
      successRateTitle: "Advanced Neurological Care",
      successRateDesc: "Our integrated approach combining advanced diagnostics, specialized treatment protocols, and neuro-rehabilitation services ensures optimal patient outcomes with 24/7 emergency stroke response.",
      conditionsTitle: "Conditions We Treat",
      conditionsDesc: "We manage a broad range of neurological disorders affecting the brain, spinal cord, nerves, and muscles with personalized treatment approaches.",
      proceduresTitle: "Diagnostic & Treatment Services",
      proceduresDesc: "We use advanced technology and medical expertise to ensure early diagnosis and personalized treatment with state-of-the-art neurological equipment.",
      rehabTitle: "Treatment & Rehabilitation",
      rehabDesc: "Comprehensive neuro-rehabilitation services and medication management for chronic neurological conditions with integrated support services.",
      symptomsTitle: "Common Symptoms That Need Neurological Attention",
      symptomsDesc: "Please consult a neurologist if you or a loved one experience any of these neurological warning signs for immediate evaluation.",
      sideEffectsTitle: "Possible Side Effects of Neurological Treatment",
      sideEffectsDesc: "Most treatments are safe and managed by specialists. Understanding potential side effects helps in comprehensive patient care and management.",
      caseStats: [
        {
          count: "24/7",
          title: "Stroke Response",
          description: "Emergency stroke response team available round-the-clock"
        },
        {
          count: "Advanced",
          title: "Diagnostic Lab",
          description: "State-of-the-art brain and nerve diagnostic laboratory"
        },
        {
          count: "Comprehensive",
          title: "Epilepsy Care",
          description: "Complete epilepsy and Parkinson's disease management"
        },
        {
          count: "Integrated",
          title: "Neuro-Rehab",
          description: "Comprehensive neuro-rehabilitation and recovery services"
        }
      ],
      conditionsTreated: [
        "Stroke (Ischemic & Hemorrhagic)",
        "Epilepsy & Seizure Disorders",
        "Migraine & Chronic Headache",
        "Parkinson's Disease",
        "Multiple Sclerosis (MS)",
        "Neuropathy & Nerve Pain",
        "Brain Infections (Meningitis, Encephalitis)",
        "Movement Disorders & Tremors",
        "Vertigo, Dizziness & Balance Issues",
        "Memory Disorders (Dementia, Alzheimer's)",
        "Muscle Weakness & Myopathies",
        "Spinal Cord Disorders & Paralysis"
      ],
      procedures: [
        {
          name: "EEG (Electroencephalogram)",
          description: "Advanced brain wave monitoring for seizure activity and neurological assessment"
        },
        {
          name: "EMG/NCS Testing",
          description: "Electromyography and nerve conduction studies for muscle and nerve function evaluation"
        },
        {
          name: "MRI & CT Brain/Spine Scans",
          description: "High-resolution imaging for detailed brain and spinal cord assessment"
        },
        {
          name: "Carotid Doppler & Brain Angiography",
          description: "Vascular imaging to assess blood flow and detect blockages"
        },
        {
          name: "Botox Therapy",
          description: "Specialized treatment for migraine prevention and muscle spasm management"
        }
      ],
      treatments: [
        {
          title: "Stroke Rehabilitation",
          description: "Comprehensive stroke recovery programs and neuro-rehabilitation services"
        },
        {
          title: "Medication Management",
          description: "Personalized medication protocols for chronic neurological conditions"
        },
        {
          title: "Spinal Tap/Lumbar Puncture",
          description: "Diagnostic procedures for neurological condition assessment"
        },
        {
          title: "Counseling & Support",
          description: "Psychological support and counseling for neurological disorder management"
        }
      ],
      symptoms: [
        { text: "Sudden weakness or numbness on one side of the body" },
        { text: "Severe or recurring headaches" },
        { text: "Loss of consciousness or seizures" },
        { text: "Difficulty speaking, walking, or maintaining balance" },
        { text: "Persistent dizziness or vision problems" },
        { text: "Memory loss or confusion" },
        { text: "Involuntary movements or tremors" },
        { text: "Tingling, burning, or nerve pain in limbs" },
        { text: "Slurred speech or facial drooping" }
      ],
      sideEffects: [
        { text: "Drowsiness, nausea, or dizziness from medications" },
        { text: "Fatigue or muscle soreness after neuro-rehab sessions" },
        { text: "Temporary weakness post-stroke therapy" },
        { text: "Allergic reactions to medications (rare)" },
        { text: "Psychological effects (anxiety, depression) in chronic conditions" }
      ],
      url: "neurology"
    },
    {
      departmentTitle: "Gastroenterology Department",
      subtitle: "Comprehensive Care for Digestive Health, from Diagnosis to Recovery",
      heroDescription: "At Ashaali Hospital, our Gastroenterology Department specializes in the diagnosis, treatment, and long-term management of diseases related to the digestive system. Our expert gastroenterologists use state-of-the-art technology and minimally invasive techniques to ensure safe, effective, and comfortable care for lasting relief and better gut health.",
      treatmentExperienceTitle: "Our Treatment Experience",
      treatmentExperienceDesc: "Our skilled gastroenterologists and liver specialists focus not just on treating symptoms but identifying root causes with advanced endoscopy and diagnostic capabilities for comprehensive digestive care.",
      successRateTitle: "Advanced Digestive Care",
      successRateDesc: "Our integrated approach combining medical, surgical, and nutritional support with in-house endoscopy and advanced screening ensures optimal digestive wellness and patient outcomes.",
      conditionsTitle: "Conditions We Treat",
      conditionsDesc: "We provide expert care for a wide range of digestive and gastrointestinal conditions from common stomach discomforts to complex liver and pancreatic disorders.",
      proceduresTitle: "Diagnostic & Endoscopy Services",
      proceduresDesc: "Our department is equipped with advanced tools for early and accurate diagnosis including state-of-the-art endoscopy and imaging facilities.",
      rehabTitle: "Treatments & Procedures",
      rehabDesc: "We offer both medical and minimally invasive treatment options with diet counseling and long-term digestive wellness management programs.",
      symptomsTitle: "Symptoms That Need Gastro Care",
      symptomsDesc: "See a gastroenterologist if you have any of these digestive symptoms for comprehensive evaluation and specialized treatment.",
      sideEffectsTitle: "Possible Side Effects of GI Treatments",
      sideEffectsDesc: "While treatments are generally safe and well-tolerated, some mild side effects may occur and are carefully monitored by our specialists.",
      caseStats: [
        {
          count: "In-House",
          title: "Endoscopy Unit",
          description: "Advanced endoscopy, colonoscopy and fibroscan facilities"
        },
        {
          count: "Minimal",
          title: "Wait Times",
          description: "Quick appointments and rapid test report delivery"
        },
        {
          count: "Advanced",
          title: "Cancer Screening",
          description: "Comprehensive screening for liver, stomach and colon cancers"
        },
        {
          count: "Integrated",
          title: "Support",
          description: "Medical, surgical and nutritional support services"
        }
      ],
      conditionsTreated: [
        "Acidity, Gas, and Bloating",
        "Gastritis & Peptic Ulcers",
        "GERD (Acid Reflux / Heartburn)",
        "Irritable Bowel Syndrome (IBS)",
        "Inflammatory Bowel Disease (IBD) – Ulcerative Colitis, Crohn's",
        "Hepatitis (A, B, C) & Other Liver Diseases",
        "Fatty Liver & Cirrhosis",
        "Gallbladder Stones & Inflammation",
        "Pancreatitis (Acute/Chronic)",
        "Constipation & Diarrhea",
        "Swallowing Difficulties (Dysphagia)",
        "Digestive Tract Infections & Parasitic Diseases",
        "Cancers of the Stomach, Colon, Liver, Pancreas"
      ],
      procedures: [
        {
          name: "Upper GI Endoscopy (OGD)",
          description: "Advanced visualization of upper digestive tract for diagnosis and treatment"
        },
        {
          name: "Colonoscopy & Biopsy",
          description: "Comprehensive colon examination with tissue sampling for accurate diagnosis"
        },
        {
          name: "ERCP",
          description: "Endoscopic Retrograde Cholangiopancreatography for bile duct and pancreatic evaluation"
        },
        {
          name: "Fibroscan",
          description: "Non-invasive liver stiffness assessment for liver disease evaluation"
        },
        {
          name: "Abdominal Imaging",
          description: "Ultrasound, CT scan, and MRI for comprehensive digestive system evaluation"
        }
      ],
      treatments: [
        {
          title: "Endoscopic Procedures",
          description: "Minimally invasive endoscopic polyp removal and bleeding ulcer management"
        },
        {
          title: "Liver Disease Management",
          description: "Treatment of liver cirrhosis, portal hypertension, and viral hepatitis"
        },
        {
          title: "Diet Counseling",
          description: "Specialized nutritional guidance for digestive health and wellness"
        },
        {
          title: "Therapeutic ERCP",
          description: "Advanced stone and blockage removal procedures for bile duct disorders"
        }
      ],
      symptoms: [
        { text: "Persistent acidity or heartburn" },
        { text: "Abdominal pain, cramps, or bloating" },
        { text: "Blood in vomit or stool" },
        { text: "Jaundice (yellow eyes/skin)" },
        { text: "Unexplained weight loss or fatigue" },
        { text: "Frequent indigestion or nausea" },
        { text: "Changes in bowel habits (constipation/diarrhea)" },
        { text: "Difficulty swallowing or feeling of fullness" },
        { text: "Gas or flatulence not relieved by home remedies" }
      ],
      sideEffects: [
        { text: "Nausea or dizziness from acid-suppressing drugs" },
        { text: "Mild bloating after endoscopy/colonoscopy" },
        { text: "Allergic reaction to contrast during scans (rare)" },
        { text: "Temporary change in bowel habits post-procedure" },
        { text: "Post-procedure soreness or sedation-related tiredness" }
      ],
      url: "gastrology"
    },
    {
      departmentTitle: "General Surgery Department",
      subtitle: "Safe, Skilled, and Precise Surgical Care You Can Trust",
      heroDescription: "Ashaali Hospital's General Surgery Department provides expert surgical care for a wide range of conditions requiring operative intervention. Our experienced surgeons are trained in the latest techniques — including minimally invasive and laparoscopic methods — to ensure quicker recovery, less pain, and minimal scarring with surgical excellence.",
      treatmentExperienceTitle: "Our Treatment Experience",
      treatmentExperienceDesc: "Our highly experienced and specialized surgical team delivers both elective and emergency surgical care with patient-first approach, focusing on advanced techniques and comprehensive post-operative care.",
      successRateTitle: "Surgical Excellence",
      successRateDesc: "Our modern operation theatres with advanced equipment and minimally invasive expertise ensure optimal surgical outcomes with quick admission-to-discharge process and comprehensive patient care.",
      conditionsTitle: "Conditions We Treat & Surgeries Offered",
      conditionsDesc: "We provide comprehensive surgical care for a wide range of conditions from routine procedures to complex surgeries using latest minimally invasive techniques.",
      proceduresTitle: "Surgical Facilities & Technologies",
      proceduresDesc: "Our operation theatres and surgical protocols follow the highest standards of safety and precision with state-of-the-art equipment and sterile protocols.",
      rehabTitle: "Treatment & Recovery",
      rehabDesc: "Advanced surgical techniques with comprehensive post-operative rehabilitation and recovery programs including day-care surgery options for faster discharge.",
      symptomsTitle: "Symptoms That May Require Surgical Evaluation",
      symptomsDesc: "You should consult a general surgeon if you notice any of these symptoms that may indicate need for surgical intervention.",
      sideEffectsTitle: "Possible Side Effects & Surgical Risks",
      sideEffectsDesc: "Our surgeries are performed with the highest safety standards, but as with any medical procedure, potential side effects are carefully monitored and managed.",
      caseStats: [
        {
          count: "Advanced",
          title: "OT Infrastructure",
          description: "Modern operation theatres with HEPA filters and sterile protocols"
        },
        {
          count: "Minimally Invasive",
          title: "Techniques",
          description: "Laparoscopic and endoscopic expertise for faster recovery"
        },
        {
          count: "Day-Care",
          title: "Surgery Options",
          description: "Quick admission-to-discharge process with same-day procedures"
        },
        {
          count: "24/7",
          title: "Emergency Care",
          description: "Round-the-clock emergency surgical services available"
        }
      ],
      conditionsTreated: [
        "Appendicitis – Laparoscopic Appendectomy",
        "Gallbladder Stones – Laparoscopic Cholecystectomy",
        "Hernias – Inguinal, Umbilical, Incisional (Open or Laparoscopic Repair)",
        "Piles, Fissures & Fistulas – Laser or Surgical Treatments",
        "Thyroid & Parathyroid Disorders – Surgical Removal",
        "Breast Lumps & Abscesses – FNAC, Biopsy, or Surgery",
        "Hydrocele & Varicocele – Surgical Correction",
        "Abdominal Masses & Tumors – Evaluation & Excision",
        "Trauma & Injury Repairs – Emergency Wound or Fracture Surgeries",
        "Minor Surgeries – Abscess drainage, cyst removal, wound suturing"
      ],
      procedures: [
        {
          name: "Laparoscopic Surgery",
          description: "Minimally invasive surgical techniques for faster recovery and minimal scarring"
        },
        {
          name: "Modular Operation Theatre",
          description: "State-of-the-art OT with HEPA filters and advanced sterile protocols"
        },
        {
          name: "Ultrasound & CT-Guided Procedures",
          description: "Image-guided biopsies and surgical interventions for precision"
        },
        {
          name: "Emergency Surgical Care",
          description: "24/7 trauma and emergency surgical services with ICU backup"
        },
        {
          name: "Endoscopic Procedures",
          description: "Advanced endoscopic equipment for diagnostic and therapeutic interventions"
        }
      ],
      treatments: [
        {
          title: "Pre-anesthesia Evaluation",
          description: "Comprehensive pre-operative assessment and anesthesia planning for safe surgery"
        },
        {
          title: "Post-Operative Care",
          description: "Dedicated recovery rooms with specialized monitoring and nursing care"
        },
        {
          title: "Pain Management",
          description: "Advanced pain control protocols for comfortable post-surgical recovery"
        },
        {
          title: "Wound Care & Follow-up",
          description: "Comprehensive wound management and post-operative follow-up care"
        }
      ],
      symptoms: [
        { text: "Severe abdominal pain or swelling" },
        { text: "Lump or bulge in abdomen or groin" },
        { text: "Recurrent vomiting with pain" },
        { text: "Bleeding per rectum (blood in stool)" },
        { text: "Persistent pus, abscess, or non-healing wound" },
        { text: "Changes in bowel or urinary habits" },
        { text: "Pain or swelling in the scrotum or breast" },
        { text: "Difficulty swallowing or persistent indigestion" },
        { text: "Unexplained weight loss with abdominal symptoms" }
      ],
      sideEffects: [
        { text: "Mild pain or swelling at incision site" },
        { text: "Risk of infection or delayed wound healing" },
        { text: "Bleeding or clot formation (rare)" },
        { text: "Anesthesia-related dizziness or nausea" },
        { text: "Scar formation or temporary restricted movement" },
        { text: "Need for follow-up or second-stage surgery (in select cases)" }
      ]
    },
    {
      departmentTitle: "Obstetrics & Gynecology Department",
      subtitle: "Comprehensive Women's Health Care",
      heroDescription: "The Obstetrics & Gynecology Department at Ashaali Hospital is dedicated to the healthcare needs of women across all stages of life — from adolescence to menopause and beyond. Our team of skilled obstetricians and gynecologists provide expert care in pregnancy, childbirth, menstrual disorders, infertility, and all female reproductive health concerns.",
      treatmentExperienceTitle: "Our Treatment Experience",
      treatmentExperienceDesc: "Our experienced team of female gynecologists and obstetricians provides comprehensive women's health care with a focus on personalized, respectful, and confidential treatment in a comfortable, safe, and modern environment.",
      successRateTitle: "High Success Rate",
      successRateDesc: "Our advanced medical facilities and women-centric approach ensure excellent outcomes for both routine and high-risk pregnancies, with comprehensive support from first period to motherhood and beyond.",
      conditionsTitle: "Conditions We Treat",
      conditionsDesc: "We diagnose and treat a full spectrum of women's health issues across all stages of life.",
      proceduresTitle: "Services & Procedures Offered",
      proceduresDesc: "We provide both outpatient and surgical care, including obstetric and gynecological services.",
      rehabTitle: "Recovery & Postnatal Care",
      rehabDesc: "Comprehensive postnatal care and recovery support designed to ensure optimal health for mother and baby.",
      symptomsTitle: "Symptoms That Require Consultation",
      symptomsDesc: "These symptoms indicate you should see a gynecologist for proper evaluation and treatment.",
      sideEffectsTitle: "Possible Side Effects or Recovery Notes",
      sideEffectsDesc: "Most procedures are safe, but minor issues may occur during recovery.",
      caseStats: [
        {
          count: "24/7",
          title: "Emergency Care",
          description: "Round-the-clock obstetric and gynecological emergency care available"
        },
        {
          count: "100%",
          title: "Women-Centric Care",
          description: "Confidential, respectful, and personalized approach to women's health"
        },
        {
          count: "Advanced",
          title: "Medical Facilities",
          description: "Fully equipped labor room, operation theaters, and NICU support"
        },
        {
          count: "Expert",
          title: "Medical Team",
          description: "Experienced female gynecologists and obstetricians"
        }
      ],
      conditionsTreated: [
        "High-risk & Low-risk Pregnancies",
        "Irregular Menstrual Cycles",
        "PCOS/PCOD (Polycystic Ovary Syndrome)",
        "Uterine Fibroids & Ovarian Cysts",
        "Pelvic Inflammatory Disease (PID)",
        "Infertility & Preconception Counseling",
        "Menopause-Related Issues",
        "Endometriosis & Painful Periods",
        "Vaginal Infections and Discharge",
        "Urinary Tract Infections (UTIs)",
        "Cervical Dysplasia & Cancer Screening"
      ],
      procedures: [
        {
          name: "Normal & Painless Delivery",
          description: "Comprehensive obstetric care for safe and comfortable childbirth experience"
        },
        {
          name: "C-Section (Cesarean Delivery)",
          description: "Advanced surgical delivery when medically necessary for mother and baby safety"
        },
        {
          name: "Laparoscopy & Hysteroscopy",
          description: "Minimally invasive procedures for diagnosis and treatment of gynecological conditions"
        },
        {
          name: "Hysterectomy",
          description: "Uterus removal surgery using open or laparoscopic techniques as required"
        },
        {
          name: "Ovarian Cystectomy & Fibroid Removal",
          description: "Surgical removal of ovarian cysts and uterine fibroids for improved health"
        }
      ],
      treatments: [
        {
          title: "Antenatal Care",
          description: "Comprehensive pregnancy checkups, scans, and monitoring for healthy pregnancy"
        },
        {
          title: "Postnatal Care",
          description: "Complete care for mother and baby including breastfeeding guidance and recovery support"
        },
        {
          title: "Infertility Treatment",
          description: "Specialized care and counseling for couples facing conception difficulties"
        },
        {
          title: "Menopause Management",
          description: "Comprehensive care for managing menopausal symptoms and hormonal changes"
        }
      ],
      symptoms: [
        { text: "Missed or irregular periods" },
        { text: "Heavy bleeding or spotting between periods" },
        { text: "Painful cramps or intercourse" },
        { text: "Vaginal discharge with odor or itching" },
        { text: "Pelvic or lower abdominal pain" },
        { text: "Difficulty conceiving or repeated miscarriages" },
        { text: "Breast lumps or nipple discharge" },
        { text: "Menopausal symptoms disrupting daily life" }
      ],
      sideEffects: [
        { text: "Mild abdominal cramping after ultrasound or D&C" },
        { text: "Slight bleeding post-biopsy procedures" },
        { text: "Temporary fatigue post-surgery or delivery" },
        { text: "Hormonal fluctuations during treatment" },
        { text: "Scar or soreness at incision sites (laparoscopic/open surgery)" }
      ],
      url: "obstetrics-&-gynaecology"
    },
    {
      departmentTitle: "Urology Department",
      subtitle: "Advanced Kidney, Bladder & Male Reproductive Health Care",
      heroDescription: "The Urology Department at Ashaali Hospital provides expert diagnosis, medical management, and surgical care for disorders affecting the urinary tract in both men and women, as well as the male reproductive system. Our experienced urologists use cutting-edge techniques, including minimally invasive and laser-assisted procedures, to deliver safe, effective, and comfortable treatments.",
      treatmentExperienceTitle: "Our Treatment Experience",
      treatmentExperienceDesc: "Our experienced urologists and laser specialists provide comprehensive care using modern diagnostic tools and therapeutic procedures, with emphasis on precision and faster recovery through minimally invasive techniques.",
      successRateTitle: "High Success Rate",
      successRateDesc: "Our advanced endoscopic and laser-assisted procedures, combined with sterile OT protocols and comprehensive post-operative support, ensure excellent treatment outcomes and patient satisfaction.",
      conditionsTitle: "Conditions We Treat",
      conditionsDesc: "We manage a wide range of urological conditions affecting the urinary tract and male reproductive system.",
      proceduresTitle: "Surgeries & Minimally Invasive Procedures",
      proceduresDesc: "We offer a full range of urologic surgeries with emphasis on precision, safety, and faster recovery.",
      rehabTitle: "Diagnostic & Treatment Services",
      rehabDesc: "Our department is equipped with modern diagnostic tools and comprehensive therapeutic procedures for optimal patient care.",
      symptomsTitle: "Symptoms That Need Urological Evaluation",
      symptomsDesc: "These symptoms indicate you should consult a urologist for proper evaluation and treatment.",
      sideEffectsTitle: "Possible Side Effects or Post-treatment Observations",
      sideEffectsDesc: "While treatments are generally safe, you may experience minor temporary effects during recovery.",
      caseStats: [
        {
          count: "24/7",
          title: "Emergency Care",
          description: "Round-the-clock urological emergency care and support available"
        },
        {
          count: "Advanced",
          title: "Laser Technology",
          description: "State-of-the-art laser lithotripsy and minimally invasive procedures"
        },
        {
          count: "Expert",
          title: "Urologists",
          description: "Experienced urologists and laser specialists providing comprehensive care"
        },
        {
          count: "100%",
          title: "Patient Privacy",
          description: "Discreet, private, and patient-friendly consultations maintained"
        }
      ],
      conditionsTreated: [
        "Kidney Stones & Ureteric Stones",
        "Urinary Tract Infections (UTIs)",
        "Prostate Enlargement (BPH)",
        "Blood in Urine (Hematuria)",
        "Bladder Control Problems (Incontinence)",
        "Painful or Difficult Urination (Dysuria)",
        "Male Infertility & Erectile Dysfunction",
        "Hydrocele & Varicocele",
        "Urinary Obstruction & Retention",
        "Recurrent Urinary Infections in Women",
        "Cancers of Kidney, Bladder, Prostate & Testes"
      ],
      procedures: [
        {
          name: "URS (Ureteroscopy)",
          description: "Minimally invasive procedure for removing ureteric stones using advanced endoscopic techniques"
        },
        {
          name: "PCNL (Percutaneous Nephrolithotomy)",
          description: "Advanced surgical procedure for removing large kidney stones through small incisions"
        },
        {
          name: "TURP (Transurethral Resection of Prostate)",
          description: "Surgical treatment for prostate enlargement to improve urinary flow and symptoms"
        },
        {
          name: "Laser Lithotripsy",
          description: "Stone breaking procedure using laser technology without making external cuts"
        },
        {
          name: "Laparoscopic Nephrectomy",
          description: "Minimally invasive kidney surgery using laparoscopic techniques for faster recovery"
        }
      ],
      treatments: [
        {
          title: "Diagnostic Services",
          description: "Comprehensive diagnostic tools including ultrasound KUB, uroflowmetry, PSA tests, and urodynamic studies"
        },
        {
          title: "Stone Management",
          description: "Complete stone analysis, metabolic evaluation, and various treatment options from medication to surgery"
        },
        {
          title: "Male Health Services",
          description: "Specialized care for male sexual health, infertility, and reproductive system disorders"
        },
        {
          title: "Post-operative Care",
          description: "Comprehensive post-surgical support and monitoring for optimal recovery and outcomes"
        }
      ],
      symptoms: [
        { text: "Pain in lower back, abdomen, or groin" },
        { text: "Burning sensation or pain while urinating" },
        { text: "Blood in urine (even once)" },
        { text: "Inability to urinate or weak urine stream" },
        { text: "Frequent urge to urinate (especially at night)" },
        { text: "Swelling or pain in the scrotum" },
        { text: "Sexual dysfunction or infertility" },
        { text: "Unusual discharge or urinary incontinence" }
      ],
      sideEffects: [
        { text: "Temporary burning or urgency after catheter or scope procedure" },
        { text: "Mild blood in urine post-stone or prostate surgery" },
        { text: "Urinary frequency or discomfort after TURP" },
        { text: "Risk of infection (managed with antibiotics)" },
        { text: "Temporary swelling or discomfort at surgical site" }
      ],
      url: "urology"
    }
  ];

  const { name } = useParams();


  
  const handleMore=(data)=>{

        navigate(`/department/${data.toLowerCase().replace(/\s+/g, '-')}`)
      }




  useEffect(() => {
    const findServiceDetail = serviceDetails.find(val => val.url === name);
    
    setActiveService(findServiceDetail);
  }, [name])



  console.log(activeService);






  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    // { label: 'Treatment' },
    { label: 'Treatment' },

  ];


  return (
    <div className=" bg-gray-50">

      <ServiceBreadcums items={breadcrumbItems} headText={activeService?.departmentTitle} />

      {!activeService ? <p className='text-center py-20 mx-auto text-bold text-3xl'>No data</p> :

        <div>

          {/* Simple Hero Section */}
          <div className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-12">
              <div className="w-full">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {activeService?.departmentTitle}
                </h1>
                <p className="text-xl text-gray-600">
                  {activeService?.subtitle}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-full">
                  {activeService?.heroDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: primaryColor }}>
                    Book Appointment
                  </button>
                  <button className="border-2 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors" style={{ borderColor: secondaryColor, color: secondaryColor }}>
                    <a href="tel:+917897934949" className="flex items-center">
                      <Phone className="mr-2 w-5 h-5" />
                      Call Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Left Content */}
              <div className="lg:col-span-2 space-y-12">

                {/* Statistics Section */}
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                    <Activity className="w-8 h-8 mr-3" style={{ color: primaryColor }} />
                    {activeService?.treatmentExperienceTitle}
                  </h2>

                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    {activeService?.treatmentExperienceDesc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {activeService?.caseStats && activeService?.caseStats.map((stat, index) => (
                      <div key={index} className="border border-gray-200 p-6 rounded-lg">
                        <div className="text-3xl font-bold mb-2" style={{ color: primaryColor }}>
                          {stat.count}
                        </div>
                        <div className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</div>
                        <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-2">
                          {activeService?.successRateTitle}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {activeService?.successRateDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* All Content Sections */}
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
                  {/* Conditions We Treat */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{activeService?.conditionsTitle}</h2>
                  <p className="text-gray-700 mb-6 text-lg">{activeService?.conditionsDesc}</p>

                  <div className="space-y-3 mb-10">
                    {activeService?.conditionsTreated && activeService?.conditionsTreated.map((condition, index) => (
                      <div key={index} className="border border-gray-200 p-3 rounded-md hover:shadow transition-shadow bg-gray-50">
                        <p className="text-gray-800">{condition}</p>
                      </div>
                    ))}
                  </div>

                  {/* Procedures & Surgeries */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{activeService?.proceduresTitle}</h2>
                  <p className="text-gray-700 mb-6 text-lg">{activeService?.proceduresDesc}</p>

                  <div className="overflow-x-auto mb-10">
                    <table className="w-full border border-gray-300 text-left">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 border border-gray-300 font-semibold text-gray-800">Procedure</th>
                          <th className="px-4 py-2 border border-gray-300 font-semibold text-gray-800">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeService?.procedures && activeService?.procedures.map((procedure, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300 font-medium" style={{ color: primaryColor }}>{procedure.name}</td>
                            <td className="px-4 py-3 border border-gray-300 text-gray-700">{procedure.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Treatment & Rehabilitation */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{activeService?.rehabTitle}</h2>
                  <p className="text-gray-700 mb-6 text-lg">{activeService?.rehabDesc}</p>

                  <div className="overflow-x-auto mb-10">
                    <table className="w-full table-auto border border-gray-300 text-left">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 border border-gray-300 font-semibold text-gray-800">Title</th>
                          <th className="px-4 py-2 border border-gray-300 font-semibold text-gray-800">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeService?.treatments && activeService?.treatments.map((treatment, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300 font-medium">{treatment.title}</td>
                            <td className="px-4 py-3 border border-gray-300 text-gray-700">{treatment.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Symptoms to Watch Out For */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{activeService?.symptomsTitle}</h2>
                  <p className="text-gray-700 mb-6 text-lg">{activeService?.symptomsDesc}</p>

                  <div className="space-y-3 mb-10">
                    {activeService?.symptoms && activeService?.symptoms.map((symptom, index) => (
                      <div key={index} className="p-4 rounded-md border border-gray-300 bg-gray-100">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-yellow-600" />
                          <p className="text-gray-800">{symptom.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Side Effects */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{activeService?.sideEffectsTitle}</h2>
                  <p className="text-gray-700 mb-6 text-lg">{activeService?.sideEffectsDesc}</p>

                  <div className="space-y-3">
                    {activeService?.sideEffects && activeService?.sideEffects.map((effect, index) => (
                      <div key={index} className="p-4 rounded-md border border-gray-300 bg-gray-100">
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-blue-600" />
                          <p className="text-gray-800">{effect.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar - You can add additional content here */}
 <div className="space-y-8">
            
            {/* Our Specialties */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-[#18978d] px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Our Specialties
                </h3>
              </div>
              <div className="p-3">
                <div className="space-y-3">
                  {specialties.map((specialty, index) => (
                    <div
                      key={index}
                      className="group flex items-center p-3 bg-[#18978d] hover:bg-[#73cac2] rounded-lg transition-all duration-300 cursor-pointer text-white"
                      onClick={() => handleMore(specialty)}
                    >
                      <div className="w-3 h-3 rounded-full bg-white mr-4"></div>
                      <span className="font-semibold">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* Emergency Contact */}
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-800 mb-2">Cardiac Emergency</h3>
                <p className="text-red-700 text-sm mb-4">24/7 Emergency Cardiac Care</p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                         <a href="tel:+917897934949" className="hover:underline">
                  +91-7897934949
                </a>
                </div>
              </div>
            </div>

          </div>




            </div>
          </div>
        </div>
      }

    </div>





  );
};

export default OrthopaedicDepartment;
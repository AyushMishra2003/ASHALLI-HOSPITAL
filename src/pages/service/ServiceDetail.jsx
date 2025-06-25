import React, { useEffect } from 'react';
import {
  Activity,
  Users,
  Calendar,
  MapPin,
  Phone,
  Stethoscope,
  Bone,
  Eye,
  Baby,
  Brain,
  UserCheck,
  Ear,
  Pill,
  Heart,
  Shield,
  Award,
  Clock,
  GraduationCap,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  User,
} from 'lucide-react';



import BreadCrumbsComponent from '../../components/Breadcums';
import { useNavigate, useParams } from 'react-router-dom';
import { use } from 'react';

const ServiceDetail = () => {
  // Service data array
  const params = useParams();
  const { name } = useParams();

  const navigate=useNavigate()
  const servicesData = [
    {
      id: 'cardiology',
      url: 'cardiology',
      title: 'Cardiology Hospital in Lucknow',
      icon: Activity,
      iconColor: '#18978d',
      hero: {
        title: 'Cardiology Department',
        shortDescription: 'Advanced cardiac care with state-of-the-art facilities and experienced cardiologists for comprehensive heart health management.',
        heroImage: '/images/departments/cardiology-hero.jpg' // Add your image path
      },
      conditionsTreated: [
        'Coronary Artery Disease',
        'Heart Failure',
        'Arrhythmias (Irregular Heartbeat)',
        'Hypertension (High Blood Pressure)',
        'Valvular Heart Disease',
        'Congenital Heart Disease',
        'Peripheral Artery Disease',
        'Cardiomyopathy',
        'Heart Attack (Myocardial Infarction)',
        'Chest Pain (Angina)',
        'Atrial Fibrillation',
        'Deep Vein Thrombosis'
      ],
      proceduresOffered: [
        {
          name: 'Echocardiogram',
          description: 'Non-invasive ultrasound imaging of the heart to assess structure and function',
          types: ['Transthoracic Echo (TTE)', 'Transesophageal Echo (TEE)', '3D Echo', 'Stress Echo']
        },
        {
          name: 'Cardiac Catheterization',
          description: 'Minimally invasive procedure to diagnose and treat heart conditions',
          types: ['Coronary Angiography', 'Angioplasty', 'Stent Placement', 'Balloon Valvuloplasty']
        },
        {
          name: 'Holter Monitoring',
          description: 'Continuous 24-48 hour heart rhythm monitoring for arrhythmia detection'
        },
        {
          name: 'Stress Testing',
          description: 'Exercise or pharmacological stress tests to evaluate heart function under stress'
        },
        {
          name: 'Pacemaker Implantation',
          description: 'Device implantation for heart rhythm disorders'
        },
        {
          name: 'Cardiac Electrophysiology',
          description: 'Specialized procedures for complex heart rhythm disorders'
        }
      ],
      doctors: [
        {
          id: 1,
          name: 'Dr. Rajesh Kumar',
          designation: 'Senior Cardiologist & Head of Department',
          experience: '25+ Years',
          specialization: 'Interventional Cardiology, Heart Failure',
          education: 'MD (Medicine), DM (Cardiology), AIIMS Delhi',
          image: '/images/doctors/dr-rajesh-kumar.jpg',
          availability: 'Mon-Sat: 10:00 AM - 2:00 PM'
        },
        {
          id: 2,
          name: 'Dr. Priya Sharma',
          designation: 'Consultant Cardiologist',
          experience: '15+ Years',
          specialization: 'Echocardiography, Preventive Cardiology',
          education: 'MD (Medicine), DM (Cardiology)',
          image: '/images/doctors/dr-priya-sharma.jpg',
          availability: 'Mon-Fri: 3:00 PM - 6:00 PM'
        },
        {
          id: 3,
          name: 'Dr. Amit Singh',
          designation: 'Interventional Cardiologist',
          experience: '12+ Years',
          specialization: 'Angioplasty, Cardiac Catheterization',
          education: 'MD (Medicine), DM (Cardiology)',
          image: '/images/doctors/dr-amit-singh.jpg',
          availability: 'Tue, Thu, Sat: 11:00 AM - 3:00 PM'
        }
      ]
    },
    {
      id: 'orthopedics',
      url: 'orthopaedics',
      title: 'Orthopedics Hospital in Lucknow',
      icon: Bone,
      iconColor: '#3b82f6',
      hero: {
        title: 'Orthopedics Department',
        shortDescription: 'Comprehensive musculoskeletal care with advanced surgical techniques and rehabilitation services.',
        heroImage: '/images/departments/orthopedics-hero.jpg'
      },
      conditionsTreated: [
        'Fractures and Bone Injuries',
        'Arthritis (Osteoarthritis, Rheumatoid)',
        'Sports Injuries',
        'Spinal Disorders',
        'Joint Pain and Stiffness',
        'Herniated Disc',
        'Scoliosis',
        'Osteoporosis',
        'Tendon and Ligament Injuries',
        'Carpal Tunnel Syndrome',
        'Rotator Cuff Injuries',
        'Hip and Knee Problems'
      ],
      proceduresOffered: [
        {
          name: 'Joint Replacement Surgery',
          description: 'Total and partial joint replacements using latest surgical techniques',
          types: ['Total Hip Replacement', 'Total Knee Replacement', 'Shoulder Replacement', 'Revision Surgery']
        },
        {
          name: 'Arthroscopic Surgery',
          description: 'Minimally invasive keyhole surgery for joint problems',
          types: ['Knee Arthroscopy', 'Shoulder Arthroscopy', 'Hip Arthroscopy', 'Ankle Arthroscopy']
        },
        {
          name: 'Spine Surgery',
          description: 'Advanced spinal procedures for back and neck problems',
          types: ['Discectomy', 'Spinal Fusion', 'Laminectomy', 'Vertebroplasty']
        },
        {
          name: 'Fracture Treatment',
          description: 'Comprehensive fracture care from simple to complex cases'
        },
        {
          name: 'Sports Medicine',
          description: 'Specialized treatment for sports-related injuries and performance optimization'
        }
      ],
      doctors: [
        {
          id: 1,
          name: 'Dr. Sunil Gupta',
          designation: 'Senior Orthopedic Surgeon & Head of Department',
          experience: '28+ Years',
          specialization: 'Joint Replacement, Trauma Surgery',
          education: 'MS (Orthopedics), Fellowship in Joint Replacement',
          image: '/images/doctors/dr-sunil-gupta.jpg',
          availability: 'Mon-Sat: 9:00 AM - 1:00 PM'
        },
        {
          id: 2,
          name: 'Dr. Kavita Mishra',
          designation: 'Consultant Orthopedic Surgeon',
          experience: '18+ Years',
          specialization: 'Spine Surgery, Arthroscopy',
          education: 'MS (Orthopedics), Fellowship in Spine Surgery',
          image: '/images/doctors/dr-kavita-mishra.jpg',
          availability: 'Tue, Thu, Sat: 2:00 PM - 5:00 PM'
        }
      ]
    },
    {
      id: 'ophthalmology',
      url: 'ophthalmology',
      title: 'Ophthalmology Hospital in Lucknow',
      icon: Eye,
      iconColor: '#10b981',
      hero: {
        title: 'Ophthalmology Department',
        shortDescription: 'Complete eye care services with advanced diagnostic equipment and surgical facilities for all vision needs.',
        heroImage: '/images/departments/ophthalmology-hero.jpg'
      },
      conditionsTreated: [
        'Cataracts',
        'Glaucoma',
        'Diabetic Retinopathy',
        'Macular Degeneration',
        'Retinal Detachment',
        'Dry Eye Syndrome',
        'Refractive Errors (Myopia, Hyperopia)',
        'Strabismus (Squint)',
        'Amblyopia (Lazy Eye)',
        'Corneal Diseases',
        'Uveitis',
        'Eye Infections and Injuries'
      ],
      proceduresOffered: [
        {
          name: 'Cataract Surgery',
          description: 'Advanced phacoemulsification with premium IOL implantation',
          types: ['Micro-incision Surgery', 'Laser-Assisted Surgery', 'Premium IOLs', 'Toric IOLs']
        },
        {
          name: 'Retinal Surgery',
          description: 'Vitreoretinal procedures for retinal disorders',
          types: ['Vitrectomy', 'Retinal Detachment Repair', 'Diabetic Retinopathy Treatment']
        },
        {
          name: 'Glaucoma Treatment',
          description: 'Medical and surgical management of glaucoma',
          types: ['Trabeculectomy', 'Laser Trabeculoplasty', 'Glaucoma Implants']
        },
        {
          name: 'Corneal Transplantation',
          description: 'Full-thickness and partial corneal transplant procedures'
        },
        {
          name: 'LASIK Surgery',
          description: 'Laser vision correction for refractive errors'
        }
      ],
      doctors: [
        {
          id: 1,
          name: 'Dr. Anita Verma',
          designation: 'Senior Ophthalmologist & Head of Department',
          experience: '22+ Years',
          specialization: 'Cataract & Refractive Surgery',
          education: 'MS (Ophthalmology), Fellowship in Phaco Surgery',
          image: '/images/doctors/dr-anita-verma.jpg',
          availability: 'Mon-Sat: 10:00 AM - 2:00 PM'
        },
        {
          id: 2,
          name: 'Dr. Vikram Tiwari',
          designation: 'Consultant Retinal Specialist',
          experience: '16+ Years',
          specialization: 'Vitreoretinal Surgery, Diabetic Retinopathy',
          education: 'MS (Ophthalmology), Fellowship in Vitreoretinal Surgery',
          image: '/images/doctors/dr-vikram-tiwari.jpg',
          availability: 'Mon, Wed, Fri: 3:00 PM - 6:00 PM'
        }
      ]
    },
    {
      id: 'pediatrics',
      url: 'pediatrics',
      title: 'Pediatrics & Neonatology Hospital in Lucknow',
      icon: Baby,
      iconColor: '#f59e0b',
      hero: {
        title: 'Pediatrics & Neonatology Department',
        shortDescription: 'Specialized healthcare for children from newborns to adolescents with child-friendly facilities and expert care.',
        heroImage: '/images/departments/pediatrics-hero.jpg'
      },
      conditionsTreated: [
        'Respiratory Infections',
        'Gastroenteritis and Diarrhea',
        'Fever and Viral Infections',
        'Asthma and Allergies',
        'Growth and Development Issues',
        'Malnutrition',
        'Congenital Heart Disease',
        'Jaundice in Newborns',
        'Premature Birth Complications',
        'Childhood Immunization',
        'Behavioral and Learning Disorders',
        'Pediatric Emergencies'
      ],
      proceduresOffered: [
        {
          name: 'Neonatal Intensive Care',
          description: 'Specialized care for critically ill newborns and premature babies',
          types: ['NICU Care', 'Ventilator Support', 'Phototherapy', 'Kangaroo Care']
        },
        {
          name: 'Pediatric Vaccinations',
          description: 'Complete immunization schedule as per national guidelines'
        },
        {
          name: 'Growth Monitoring',
          description: 'Regular assessment of physical and developmental milestones'
        },
        {
          name: 'Pediatric Emergency Care',
          description: '24/7 emergency services for childhood illnesses and injuries'
        },
        {
          name: 'Newborn Screening',
          description: 'Early detection of genetic and metabolic disorders'
        }
      ],
      doctors: [
        {
          id: 1,
          name: 'Dr. Rashmi Agarwal',
          designation: 'Senior Pediatrician & Head of Department',
          experience: '20+ Years',
          specialization: 'General Pediatrics, Child Development',
          education: 'MD (Pediatrics), Fellowship in Pediatric Cardiology',
          image: '/images/doctors/dr-rashmi-agarwal.jpg',
          availability: 'Mon-Sat: 11:00 AM - 3:00 PM'
        },
        {
          id: 2,
          name: 'Dr. Manoj Kumar',
          designation: 'Consultant Neonatologist',
          experience: '14+ Years',
          specialization: 'Neonatal Intensive Care, Premature Care',
          education: 'MD (Pediatrics), DM (Neonatology)',
          image: '/images/doctors/dr-manoj-kumar.jpg',
          availability: '24/7 NICU Coverage'
        }
      ]
    },
    {
      id: 'neurology',
      url: 'neurology',
      title: 'Neurology Hospital in Lucknow',
      icon: Brain,
      iconColor: '#8b5cf6',
      hero: {
        title: 'Neurology Department',
        shortDescription: 'Advanced neurological care for brain, spine, and nervous system disorders with cutting-edge diagnostic facilities.',
        heroImage: '/images/departments/neurology-hero.jpg'
      },
      conditionsTreated: [
        'Stroke and Mini-strokes (TIA)',
        'Epilepsy and Seizure Disorders',
        'Migraine and Headaches',
        'Parkinson\'s Disease',
        'Multiple Sclerosis',
        'Alzheimer\'s Disease and Dementia',
        'Neuropathy',
        'Brain Tumors',
        'Spinal Cord Injuries',
        'Movement Disorders',
        'Sleep Disorders',
        'Muscle Diseases'
      ],
      proceduresOffered: [
        {
          name: 'Stroke Management',
          description: 'Rapid stroke assessment and treatment protocols',
          types: ['Thrombolytic Therapy', 'Mechanical Thrombectomy', 'Stroke Rehabilitation']
        },
        {
          name: 'EEG Monitoring',
          description: 'Brain wave monitoring for seizure disorders and brain function assessment'
        },
        {
          name: 'EMG/NCV Studies',
          description: 'Nerve and muscle function testing for neuropathy diagnosis'
        },
        {
          name: 'Botulinum Toxin Therapy',
          description: 'Treatment for movement disorders and chronic migraines'
        },
        {
          name: 'Deep Brain Stimulation',
          description: 'Advanced treatment for Parkinson\'s disease and movement disorders'
        }
      ],
      doctors: [
        {
          id: 1,
          name: 'Dr. Ashok Pandey',
          designation: 'Senior Neurologist & Head of Department',
          experience: '24+ Years',
          specialization: 'Stroke Medicine, Movement Disorders',
          education: 'MD (Medicine), DM (Neurology), AIIMS Delhi',
          image: '/images/doctors/dr-ashok-pandey.jpg',
          availability: 'Mon-Sat: 9:00 AM - 1:00 PM'
        },
        {
          id: 2,
          name: 'Dr. Sunita Singh',
          designation: 'Consultant Neurologist',
          experience: '17+ Years',
          specialization: 'Epilepsy, Sleep Disorders',
          education: 'MD (Medicine), DM (Neurology)',
          image: '/images/doctors/dr-sunita-singh.jpg',
          availability: 'Tue, Thu, Sat: 2:00 PM - 5:00 PM'
        }
      ]
    },
    {
      id: 'general-medicine',
      url: 'general-medicine',
      title: 'General Medicine Hospital in Lucknow',
      icon: UserCheck,
      iconColor: '#059669',
      hero: {
        title: 'General Medicine Department',
        shortDescription: 'Comprehensive internal medicine care for adult diseases with preventive health services and chronic disease management.',
        heroImage: '/images/departments/general-medicine-hero.jpg'
      },
      conditionsTreated: [
        'Diabetes Mellitus',
        'Hypertension',
        'Heart Disease',
        'Respiratory Diseases',
        'Kidney Disease',
        'Liver Disorders',
        'Thyroid Disorders',
        'Infectious Diseases',
        'Anemia and Blood Disorders',
        'Arthritis and Joint Pain',
        'Obesity and Metabolic Syndrome',
        'Geriatric Conditions'
      ],
      proceduresOffered: [
        {
          name: 'Comprehensive Health Check-ups',
          description: 'Complete health screening packages for early disease detection',
          types: ['Executive Health Package', 'Diabetes Screening', 'Cardiac Risk Assessment']
        },
        {
          name: 'Chronic Disease Management',
          description: 'Long-term care plans for diabetes, hypertension, and other chronic conditions'
        },
        {
          name: 'Vaccination Services',
          description: 'Adult immunization including flu shots, hepatitis vaccines'
        },
        {
          name: 'Preventive Care',
          description: 'Health counseling and lifestyle modification programs'
        },
        {
          name: 'Emergency Medicine',
          description: '24/7 emergency care for acute medical conditions'
        }
      ],
      doctors: [
        {
          id: 1,
          name: 'Dr. Vinod Tripathi',
          designation: 'Senior Physician & Head of Department',
          experience: '26+ Years',
          specialization: 'Internal Medicine, Diabetes Care',
          education: 'MD (Medicine), Fellowship in Diabetology',
          image: '/images/doctors/dr-vinod-tripathi.jpg',
          availability: 'Mon-Sat: 10:00 AM - 2:00 PM'
        },
        {
          id: 2,
          name: 'Dr. Meera Srivastava',
          designation: 'Consultant Physician',
          experience: '19+ Years',
          specialization: 'Hypertension, Geriatric Medicine',
          education: 'MD (Medicine), Certificate in Geriatrics',
          image: '/images/doctors/dr-meera-srivastava.jpg',
          availability: 'Mon-Fri: 4:00 PM - 7:00 PM'
        }
      ]
    },
    {
      id: 'ent',
      url: 'ent',
      title: 'ENT (Ear, Nose & Throat) Hospital in Lucknow',
      icon: Ear,
      iconColor: '#dc2626',
      hero: {
        title: 'ENT Department',
        shortDescription: 'Complete ear, nose, and throat care with advanced diagnostic equipment and minimally invasive surgical techniques.',
        heroImage: '/images/departments/ent-hero.jpg'
      },
      conditionsTreated: [
        'Hearing Loss and Deafness',
        'Chronic Sinusitis',
        'Tonsillitis and Adenoids',
        'Ear Infections',
        'Nasal Polyps',
        'Deviated Septum',
        'Voice Disorders',
        'Throat Cancer',
        'Sleep Apnea',
        'Tinnitus (Ear Ringing)',
        'Vertigo and Balance Disorders',
        'Facial Nerve Paralysis'
      ],
      proceduresOffered: [
        {
          name: 'Endoscopic Sinus Surgery',
          description: 'Minimally invasive treatment for chronic sinusitis and nasal polyps'
        },
        {
          name: 'Hearing Assessment & Aids',
          description: 'Complete hearing evaluation and hearing aid fitting services',
          types: ['Audiometry', 'Tympanometry', 'Hearing Aid Fitting', 'Cochlear Implants']
        },
        {
          name: 'Voice Therapy',
          description: 'Treatment for voice disorders and vocal cord problems'
        },
        {
          name: 'Sleep Surgery',
          description: 'Surgical treatment for sleep apnea and snoring'
        },
        {
          name: 'Head & Neck Surgery',
          description: 'Treatment for head and neck cancers and thyroid disorders'
        }
      ],
      doctors: [
        {
          id: 1,
          name: 'Dr. Rakesh Chandra',
          designation: 'Senior ENT Surgeon & Head of Department',
          experience: '23+ Years',
          specialization: 'Rhinology, Endoscopic Surgery',
          education: 'MS (ENT), Fellowship in Rhinology',
          image: '/images/doctors/dr-rakesh-chandra.jpg',
          availability: 'Mon-Sat: 11:00 AM - 3:00 PM'
        },
        {
          id: 2,
          name: 'Dr. Pooja Agrawal',
          designation: 'Consultant ENT Specialist',
          experience: '15+ Years',
          specialization: 'Otology, Hearing Disorders',
          education: 'MS (ENT), Fellowship in Otology',
          image: '/images/doctors/dr-pooja-agrawal.jpg',
          availability: 'Tue, Thu, Sat: 3:00 PM - 6:00 PM'
        }
      ]
    },
    {
      id: 'gastroenterology',
      url: 'gastroenterology',
      title: 'Gastroenterology Hospital in Lucknow',
      icon: Pill,
      iconColor: '#7c3aed',
      hero: {
        title: 'Gastroenterology Department',
        shortDescription: 'Advanced digestive health care with state-of-the-art endoscopy facilities and comprehensive GI disease management.',
        heroImage: '/images/departments/gastroenterology-hero.jpg'
      },
      conditionsTreated: [
        'Acid Reflux (GERD)',
        'Peptic Ulcers',
        'Inflammatory Bowel Disease (IBD)',
        'Irritable Bowel Syndrome (IBS)',
        'Liver Cirrhosis',
        'Hepatitis B & C',
        'Pancreatitis',
        'Gallbladder Stones',
        'Colon Cancer',
        'Stomach Cancer',
        'Constipation and Diarrhea',
        'Abdominal Pain'
      ],
      proceduresOffered: [
        {
          name: 'Upper & Lower Endoscopy',
          description: 'Advanced endoscopic procedures for diagnosis and treatment',
          types: ['Upper GI Endoscopy', 'Colonoscopy', 'Sigmoidoscopy', 'Capsule Endoscopy']
        },
        {
          name: 'ERCP',
          description: 'Endoscopic treatment for bile duct and pancreatic disorders'
        },
        {
          name: 'Endoscopic Ultrasound (EUS)',
          description: 'Advanced imaging for pancreatic and GI tract evaluation'
        },
        {
          name: 'Liver Biopsy',
          description: 'Minimally invasive liver tissue sampling for diagnosis'
        },
        {
          name: 'Therapeutic Endoscopy',
          description: 'Treatment procedures through endoscopy including polypectomy and stenting'
        }
      ],
      doctors: [
        {
          id: 1,
          name: 'Dr. Alok Mishra',
          designation: 'Senior Gastroenterologist & Head of Department',
          experience: '21+ Years',
          specialization: 'Therapeutic Endoscopy, Liver Diseases',
          education: 'MD (Medicine), DM (Gastroenterology)',
          image: '/images/doctors/dr-alok-mishra.jpg',
          availability: 'Mon-Sat: 10:00 AM - 2:00 PM'
        },
        {
          id: 2,
          name: 'Dr. Renu Saxena',
          designation: 'Consultant Gastroenterologist',
          experience: '16+ Years',
          specialization: 'IBD, Hepatology',
          education: 'MD (Medicine), DM (Gastroenterology)',
          image: '/images/doctors/dr-renu-saxena.jpg',
          availability: 'Mon, Wed, Fri: 3:00 PM - 6:00 PM'
        }
      ]
    },
    {
      id: 'general-surgery',
      url: 'general-surgery',
      title: 'General Surgery Hospital in Lucknow',
      icon: Pill,
      iconColor: '#16a34a',
      hero: {
        title: 'General Surgery Department',
        shortDescription: 'Comprehensive surgical care with advanced laparoscopic techniques and 24/7 emergency surgical services.',
        heroImage: '/images/departments/general-surgery-hero.jpg'
      },
      conditionsTreated: [
        'Appendicitis',
        'Gallbladder Stones',
        'Hernias (Inguinal, Umbilical)',
        'Breast Lumps and Cancer',
        'Thyroid Disorders',
        'Piles and Fissures',
        'Intestinal Obstruction',
        'Trauma and Injuries',
        'Soft Tissue Tumors',
        'Abdominal Pain',
        'Varicose Veins',
        'Skin and Subcutaneous Cysts'
      ],
      proceduresOffered: [
        {
          name: 'Laparoscopic Surgery',
          description: 'Minimally invasive keyhole surgery for faster recovery',
          types: ['Laparoscopic Appendectomy', 'Cholecystectomy', 'Hernia Repair', 'Diagnostic Laparoscopy']
        },
        {
          name: 'Hernia Repair',
          description: 'Advanced mesh repair techniques for all types of hernias'
        },
        {
          name: 'Breast Surgery',
          description: 'Comprehensive breast care including cancer surgery and reconstruction'
        },
        {
          name: 'Emergency Surgery',
          description: '24/7 emergency surgical services for trauma and acute conditions'
        },
        {
          name: 'Gastrointestinal Surgery',
          description: 'Surgical treatment for GI tract disorders and cancers'
        }
      ],
      doctors: [
        {
          id: 1,
          name: 'Dr. Sanjay Agarwal',
          designation: 'Senior General Surgeon & Head of Department',
          experience: '25+ Years',
          specialization: 'Laparoscopic Surgery, GI Surgery',
          education: 'MS (General Surgery), Fellowship in Laparoscopy',
          image: '/images/doctors/dr-sanjay-agarwal.jpg',
          availability: 'Mon-Sat: 9:00 AM - 1:00 PM'
        },
        {
          id: 2,
          name: 'Dr. Neha Sharma',
          designation: 'Consultant General Surgeon',
          experience: '14+ Years',
          specialization: 'Breast Surgery, Thyroid Surgery',
          education: 'MS (General Surgery), MCh (Surgical Oncology)',
          image: '/images/doctors/dr-neha-sharma.jpg',
          availability: 'Tue, Thu, Sat: 2:00 PM - 5:00 PM'
        }
      ]
    },
    {
      id: 'obstetrics-gynecology',
      url: 'obstetrics-gynecology',
      title: 'Obstetrics & Gynaecology Hospital in Lucknow',
      icon: Baby,
      iconColor: '#d946ef',
      hero: {
        title: 'Obstetrics & Gynaecology Department',
        shortDescription: 'Comprehensive women\'s healthcare from pregnancy care to gynecological surgeries with modern delivery suites.',
        heroImage: '/images/departments/obstetrics-gynecology-hero.jpg'
      },
      conditionsTreated: [
        'Pregnancy and Childbirth',
        'High-Risk Pregnancies',
        'Menstrual Disorders',
        'PCOS (Polycystic Ovary Syndrome)',
        'Uterine Fibroids',
        'Ovarian Cysts',
        'Endometriosis',
        'Infertility',
        'Menopause',
        'Cervical Cancer',
        'Ovarian Cancer',
        'Pelvic Inflammatory Disease'
      ],
      proceduresOffered: [
        {
          name: 'Normal & Cesarean Delivery',
          description: 'Safe delivery options with modern labor and delivery suites',
          types: ['Normal Vaginal Delivery', 'Cesarean Section', 'VBAC', 'High-Risk Delivery']
        },
        {
          name: 'Gynecological Surgery',
          description: 'Minimally invasive and open surgical procedures',
          types: ['Hysterectomy', 'Myomectomy', 'Ovarian Cyst Removal', 'Laparoscopic Surgery']
        },
        {
          name: 'Infertility Treatment',
          description: 'Advanced fertility treatments and assisted reproduction',
          types: ['IUI', 'IVF', 'ICSI', 'Fertility Counseling']
        },
        {
          name: 'Antenatal Care',
          description: 'Comprehensive pregnancy monitoring and care'
        },
        {
          name: 'Cancer Screening',
          description: 'Early detection programs for gynecological cancers'
        }
      ],
      doctors: [
        {
          id: 1,
          name: 'Dr. Sangeeta Gupta',
          designation: 'Senior Obstetrician & Gynaecologist',
          experience: '22+ Years',
          specialization: 'High-Risk Pregnancy, Laparoscopic Surgery',
          education: 'MD (Obstetrics & Gynaecology), Fellowship in Fetal Medicine',
          image: '/images/doctors/dr-sangeeta-gupta.jpg',
          availability: 'Mon-Sat: 10:00 AM - 2:00 PM'
        },
        {
          id: 2,
          name: 'Dr. Rekha Pandey',
          designation: 'Consultant Gynaecologist',
          experience: '18+ Years',
          specialization: 'Infertility, Menopause Management',
          education: 'MD (Obstetrics & Gynaecology), Fellowship in Reproductive Medicine',
          image: '/images/doctors/dr-rekha-pandey.jpg',
          availability: 'Mon, We',
        },
      ]
    }
  ]

  const specialties = [
    "PAEDIATRICS & NEONATOLOGY",
    // "GYNAECOLOGY AND OBSTETRICS",
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

    // Sample case statistics - you can replace with your actual data
  const caseStats = [
    { title: 'Total Cardiac Procedures', count: '2,847' },
    { title: 'Angioplasty Procedures', count: '485' },
    { title: 'Echocardiograms Performed', count: '1,245' },
    { title: 'Pacemaker Implantations', count: '67' },
    { title: 'Cardiac Catheterizations', count: '324' },
    { title: 'Emergency Cardiac Cases', count: '156' }
  ];

  // Comprehensive care categories based on conditions
  const conditionsData = [
    { category: 'Coronary Conditions', items: ['Coronary Artery Disease', 'Heart Attack', 'Chest Pain'] },
    { category: 'Heart Rhythm Disorders', items: ['Arrhythmias', 'Atrial Fibrillation'] },
    { category: 'Heart Structure Issues', items: ['Valvular Heart Disease', 'Congenital Heart Disease'] },
    { category: 'Heart Muscle Problems', items: ['Heart Failure', 'Cardiomyopathy'] },
    { category: 'Vascular Conditions', items: ['Peripheral Artery Disease', 'Deep Vein Thrombosis'] },
    { category: 'Blood Pressure Disorders', items: ['Hypertension'] }
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Service Detail' },
  ];
const handleMore = (data) => {
  console.log("data is ", data);

  const toUrlParam = (name) => {
    return name
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/\s+/g, '-')         // Replace spaces with -
      .replace(/[^a-z0-9-]/g, '');  // Remove special characters
  };

  const slug = toUrlParam(data);  // convert data to slug
  navigate(`/department/${slug}`);
};

  // Get service data based on URL parameter (default to orthopedics - index 1)
  const getServiceData = () => {
     console.log(name);
     

    if (name) {
  
      const service = servicesData.find((s) => {
        console.log(s.url);
        return s?.url === name
      });
      return service || servicesData[1]; // Default to orthopedics if not found
    }
    // return servicesData[1]; // Default to orthopedics (index 1)
  };



  useEffect(() => {
    getServiceData();
  }, [name])

      // Scroll to top on component mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const currentService = getServiceData();


  const IconComponent = currentService.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadCrumbsComponent items={breadcrumbItems} headText={currentService.title} />


      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl">
            {/* <h1 className="text-xl md:text-2xl  lg:text-3xl font-bold text-gray-800 mb-4">
              {currentService.title}
            </h1> */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {currentService.hero.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#18978d]  text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
                BOOK APPOINTMENT →
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
                    <a href="tel:+917897934949" className="hover:underline">
                   CALL US →
                </a>
              
              </button>
            </div>
            <div className="mt-6">
              <p className="text-gray-700 font-semibold">Call Now: +918062970888</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex space-x-8 overflow-x-auto">
            {['CONDITIONS TREATED', 'PROCEDURES AND TREATMENTS', 'COMPREHENSIVE CARE FOR CARDIAC CONDITIONS', 'OUR DOCTORS'].map((tab, index) => (
              <button
                key={index}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  index === 0 
                    ? 'border-[#18978d] text-[#18978d]' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Conditions Treated Statistics */}
            <div>
              <h2 className="lg:text-2xl text-md md:text-xl font-bold text-gray-800 mb-2">
                Total Cases Treated For {currentService.hero.title} In Lucknow
              </h2>
              <p className="text-gray-600 mb-8">
                Our cardiology department has handled an impressive volume of cases, demonstrating both our capacity and expertise:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                {caseStats.map((stat, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#18978d] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">{stat.title}: </span>
                      <span className="text-gray-600">{stat.count}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 text-sm bg-blue-50 p-2 rounded-lg">
                With a success rate of 98%, this data reflects our commitment to achieving superior patient outcomes through experienced cardiac care.
              </p>
            </div>

            {/* Top Procedures */}
            <div>
              <h2 className="lg:text-2xl text-md md:text-xl font-bold text-gray-800 mb-3">
                Top Procedures & Treatments For Cardiology In Lucknow
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentService.proceduresOffered.map((procedure, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg px-4 py-2 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {procedure.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {procedure.description}
                    </p>
                    {procedure.types && (
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-[#18978d] uppercase tracking-wide mb-2">Types Available:</p>
                        <div className="space-y-1">
                          {procedure.types.map((type, idx) => (
                            <div key={idx} className="flex items-center text-gray-600 text-sm">
                              <CheckCircle className="w-3 h-3 text-[#18978d] mr-2 flex-shrink-0" />
                              {type}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <button className="text-[#18978d] font-medium text-sm hover:text-blue-700 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Comprehensive Care */}
            <div>
              <h2 className="lg:text-2xl text-md md:text-xl font-bold text-gray-800 mb-2">
                Comprehensive Care For Cardiac Conditions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {conditionsData.map((condition, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#18978d] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{condition.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Doctors */}
            <div>
              <h2 className="lg:text-2xl text-xl md:text-xl font-bold text-gray-800 mb-4">Our Expert Cardiologists</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {currentService.doctors.map((doctor, index) => (
                  <div key={doctor.id} className="bg-white border border-gray-200 rounded-lg p-2 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
              
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {doctor.name}
                        </h3>
                        <p className="text-[#18978d] font-semibold mb-2">{doctor.designation}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2 text-[#18978d]" />
                            <span><strong>Experience:</strong> {doctor.experience}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Heart className="w-4 h-4 mr-2 text-[#18978d]" />
                            <span><strong>Specialization:</strong> {doctor.specialization}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <GraduationCap className="w-4 h-4 mr-2 text-[#18978d]" />
                            <span><strong>Education:</strong> {doctor.education}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2 text-[#18978d]" />
                            <span><strong>Available:</strong> {doctor.availability}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
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

            {/* Conditions Treated List */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#18978d] to-cyan-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">
                  Conditions We Treat
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {currentService.conditionsTreated.slice(0, 8).map((condition, index) => (
                    <div key={index} className="flex items-center p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 group">
                      <div className="w-2 h-2 rounded-full bg-[#18978d] mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-700 text-sm font-medium group-hover:text-[#18978d] transition-colors duration-300">
                        {condition}
                      </span>
                    </div>
                  ))}
                  {currentService.conditionsTreated.length > 8 && (
                    <button className="text-[#18978d] font-medium text-sm hover:text-blue-700 transition-colors duration-300 mt-3">
                      View All Conditions →
                    </button>
                  )}
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
  );
};

export default ServiceDetail;
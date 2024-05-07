interface NavbarProps {
  auth: any;
  handleIsSignIn: () => void;
}

interface TranslationTabProps {}

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: (arg: boolean) => void;
  handleSidebar: () => void;
  locale: string;
  auth: any;
  handleIsSignIn: () => void;
}

interface HomeDropdownProps {}

interface FooterProps {}

interface AboutProps {}

interface EquipmentsProps {}

interface DoctorsProps {}

interface ServicesProps {}

interface ReservationProps {}

interface AccessProps {}

interface GoogleMapProps {}

interface ContactProps {}

interface DoctorsPageProps {}

interface ServicesPageProps {}

interface EquipmentsPageProps {}

interface ClinicInfoProps {}

interface RevealProps {
  children: JSX.Element;
}

interface CarouselProps {
  locale: string;
  focus: number;
  setFocus: (index: number) => void;
}

interface EquipmentInfoProps {
  locale: string;
}

interface DoctorsInfoProps {
  locale: string;
  focus: number;
  setFocus: (index: number) => void;
}

interface HamburgerProps {
  showSidebar: boolean;
  setShowSidebar: (arg: boolean) => void;
  handleSidebar: () => void;
  locale: string;
  auth: any;
  handleIsSignIn: () => void;
}

interface ConsultationProps {
  locale: string;
  selectedPlan: string | null;
  selectedTests: string[];
  setSelectedPlan: Dispatch<SetStateAction<string | null>>;
  setSelectedTests: Dispatch<SetStateActionstring[]>;
}

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  formData: {
    selectedPlan: string | null;
    selectedTests: string[];
    name: string;
    nameFurigana: string;
    surname: string;
    surnameFurigana: string;
    dateOfBirth: string;
    address: string;
    email: string;
    phoneNumber: string;
    preferredContact: string;
    consultationHistory: string;
    metalInBody: string;
    metalDetails: string;
    requests: string;
    consultationData: consultationData[];
  };
  locale: string;
}

interface consultationData {
  date: string;
  timeSlot: string;
}
interface FormData {
  selectedPlan: string | null;
  selectedTests: string[];
  name: string;
  nameFurigana: string;
  surname: string;
  surnameFurigana: string;
  dateOfBirth: string;
  address: string;
  email: string;
  phoneNumber: string;
  preferredContact: string;
  consultationHistory: string;
  metalInBody: string;
  metalDetails: string;
  requests: string;
  consultationData: consultationData[];
}

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

interface ReservationProcessProps {
  locale: string;
}

interface OptionalServicesInfoProps {
  locale: string;
}

interface ReservationNoticeProps {
  locale: string;
}

interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
}

interface simpleAnnouncementCard {
  title: string;
  entitle: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
}

interface fullAnnouncement {
  currentSlug: string;
  title: string;
  content: any;
  entitle: any;
  contentImage: any;
  titleImage: any;
}

interface fullBlog {
  currentSlug: string;
  title: string;
  content: any;
  entitle: any;
  titleImage: any;
}

interface ArrowIconProps {
  showDropdown: boolean;
  handleRotation: () => void;
}

interface LoginProps {
  getAuth: (arg:any) => void;
  handleIsSignIn: () => void;
}

interface SignupProps {
  handleIsSignIn: () => void;
}

interface UserInfoProps {
  auth: any;
  handleIsSignIn: () => void;
}
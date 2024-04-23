interface NavbarProps {}

interface TranslationTabProps {}

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: (arg: boolean) => void;
  handleSidebar: () => void;
  locale: string;
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
}

interface ConsultationProps {
  locale: string;
  selectedPlan: string | null;
  selectedTests: string[];
}

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  formData: {
    consultationDates: string[];
    selectedTimeSlots: string[];
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
    preferredContactTime: string;
  };
  locale: string;
  selectedPlan: string | null;
  selectedTests: string[];
}
interface FormData extends globalThis.FormData {
  consultationDates: string[];
  selectedTimeSlots: string[];
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
  preferredContactTime: string;
}

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

interface ReservationProcessProps {
  locale: string;
}

interface OptionalServicesInfoProps{
  locale: string;
}

interface ReservationNoticeProps {

  locale: string;
}
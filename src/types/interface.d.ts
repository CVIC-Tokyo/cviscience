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

interface StaffProps {}

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
}

interface EquipmentInfoProps {
  locale: string;
}
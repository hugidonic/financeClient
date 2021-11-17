import { CategoryType } from "../redux/reduxTypes";
import uuid from "./../utils/uuid";
import {
  CafeIcon,
  ProductsIcon,
  TransportIcon,
  FamilyIcon,
  SportIcon,
  CoffeeIcon,
  WaterIcon,
  EducationIcon,
  BankIcon,
  HealthcareIcon,
	ClothesIcon,
	PresentIcon,
  HouseIcon,
  OthersIcon,
  BeautyIcon,
  WalletIcon
} from "./../constants/icons";

const categoryColors = [
  "#DE6E4B",
  "#7FD1B9",
  "#60992D",
  "#D991BA",
  "#C200FB",
  "#DE6C83",
  "#304C89",
  "#EC0868",
  "#EC7D10",
  "#FFBC0A",
  "#89023E",
  "#BFDBF7",
  "#C2E812",
  "#DBD56E",
  "#65B891",
];

export const initExpenseCategories: CategoryType[] = [
  {
    name: "Кафе",
    icon: CafeIcon,
    color: categoryColors[0],
    type: 'Расходы',
  },
  {
    name: "Продукты",
    icon: ProductsIcon,
    color: categoryColors[1],
    type: 'Расходы',
  },
  {
    name: "Транспорт",
    icon: TransportIcon,
    color: categoryColors[2],
    type: 'Расходы',
  },
  {
    name: "Подарки",
    icon: PresentIcon,
    color: categoryColors[3],
    type: 'Расходы',
  },
  {
    name: "Семья",
    icon: FamilyIcon,
    color: categoryColors[4],
    type: 'Расходы',
  },
  {
    name: "Спорт",
    icon: SportIcon,
    color: categoryColors[5],
    type: 'Расходы',
  },
  {
    name: "Кофе",
    icon: CoffeeIcon,
    color: categoryColors[6],
    type: 'Расходы',
  },
  {
    name: "Вода",
    icon: WaterIcon,
    color: categoryColors[7],
    type: 'Расходы',
  },
  {
    name: "Образование",
    icon: EducationIcon,
    color: categoryColors[8],
    type: 'Расходы',
  },
  {
    name: "Кредит",
    icon: BankIcon,
    color: categoryColors[9],
    type: 'Расходы',
  },
  {
    name: "Одежда",
    icon: ClothesIcon,
    color: categoryColors[10],
    type: 'Расходы',
  },
  {
    name: "Здоровье",
    icon: HealthcareIcon,
    color: categoryColors[11],
    type: 'Расходы',
  },
  {
    name: "Дом",
    icon: HouseIcon,
    color: categoryColors[12],
    type: 'Расходы',
  },
  {
    name: "Красота",
    icon: BeautyIcon,
    color: categoryColors[13],
    type: 'Расходы',
  },
  {
    name: "Другое",
    icon: OthersIcon,
    color: categoryColors[14],
    type: 'Расходы',
  },
];

export const initIncomeCategories: CategoryType[] = [
  {
    name: 'Подарок',
    color: categoryColors[7],
    icon: PresentIcon,
    type: 'Доходы',
  },
  {
    name: 'Зарплата',
    color: categoryColors[8],
    icon: WalletIcon,
    type: 'Доходы',
  },
  {
    name: 'Проценты',
    color: categoryColors[9],
    icon: BankIcon,
    type: 'Доходы',
  },
  {
    name: 'Семья',
    color: categoryColors[10],
    icon: FamilyIcon,
    type: 'Доходы',
  },
]
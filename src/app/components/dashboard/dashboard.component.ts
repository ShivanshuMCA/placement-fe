import { Component } from '@angular/core';
interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  products!: any[];
  colleges!: any[];
  courses!: any[];
  cols!: Column[];
  data!: any[];

  responsiveOptions: any[] | undefined;
  ngOnInit() {
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'inventoryStatus', header: 'Status' },
      { field: 'rating', header: 'Rating' },
    ];
    this.courses = [
      'B.TECH',
      'BCOM',
      'BCA',
      'B.SC',
      'BA',
      'B.ED',
      'M.SC',
      'M.TECH',
    ];
    this.data = [
      {
        rank: '#1',
        college: 'IIT Madras - Indian Institute of Technology',
        icon: 'assets/images/clg-icon.webp',
        address: 'Chennai,Tamil Nadu',
        ranking: '#1 out of 200 in India 2024',
        cutoff: 'JEE-Advanced 2024 Cut off 419',
        deadline: '27 Apr - 18 Jun 2024',
        fee: '₹2,42,000',
      },
      {
        rank: '#1',
        college: 'IIT Madras - Indian Institute of Technology',
        icon: 'assets/images/clg-icon.webp',
        address: 'Chennai,Tamil Nadu',
        ranking: '#1 out of 200 in India 2024',
        cutoff: 'JEE-Advanced 2024 Cut off 419',
        deadline: '27 Apr - 18 Jun 2024',
        fee: '₹2,42,000',
      },
      {
        rank: '#1',
        college: 'IIT Madras - Indian Institute of Technology',
        icon: 'assets/images/clg-icon.webp',
        address: 'Chennai,Tamil Nadu',
        ranking: '#1 out of 200 in India 2024',
        cutoff: 'JEE-Advanced 2024 Cut off 419',
        deadline: '27 Apr - 18 Jun 2024',
        fee: '₹2,42,000',
      },
      {
        rank: '#1',
        college: 'IIT Madras - Indian Institute of Technology',
        icon: 'assets/images/clg-icon.webp',
        address: 'Chennai,Tamil Nadu',
        ranking: '#1 out of 200 in India 2024',
        cutoff: 'JEE-Advanced 2024 Cut off 419',
        deadline: '27 Apr - 18 Jun 2024',
        fee: '₹2,42,000',
      },
      {
        rank: '#1',
        college: 'IIT Madras - Indian Institute of Technology',
        icon: 'assets/images/clg-icon.webp',
        address: 'Chennai,Tamil Nadu',
        ranking: '#1 out of 200 in India 2024',
        cutoff: 'JEE-Advanced 2024 Cut off 419',
        deadline: '27 Apr - 18 Jun 2024',
        fee: '₹2,42,000',
      },
      {
        rank: '#1',
        college: 'IIT Madras - Indian Institute of Technology',
        icon: 'assets/images/clg-icon.webp',
        address: 'Chennai,Tamil Nadu',
        ranking: '#1 out of 200 in India 2024',
        cutoff: 'JEE-Advanced 2024 Cut off 419',
        deadline: '27 Apr - 18 Jun 2024',
        fee: '₹2,42,000',
      },
    ];
    this.products = [
      {
        item: 1,
        title: 'Engineering',
        totalClg: 545,
        type: ['BE/B.TECH', 'Diploma in Engineering', 'ME/M.TECH'],
      },
      {
        item: 2,
        title: 'Management',
        totalClg: 6767,
        type: ['MBA/PGDM', 'BBA/BMS', 'Executive MBA'],
      },
      { item: 3, title: 'Commerce', totalClg: 425, type: ['B.COM', 'M.COM'] },
      {
        item: 4,
        title: 'Arts',
        totalClg: 5450,
        type: ['BA', 'MA', 'BFA', 'BSW'],
      },
      {
        item: 5,
        title: 'Medical',
        totalClg: 5405,
        type: ['MBBS', 'PG Medical'],
      },
      { item: 6, title: 'Design', totalClg: 1540, type: ['B.Des', 'M.Des'] },
    ];
    this.colleges = [
      {
        link: '../../../assets/images/header-img-1.webp',
        name: 'IIT Kanpur',
        address: 'kapur,INDIA',
        fee: '3 lac',
        pck: '10 lac',
        courses: ['B.TECH', 'BCA', 'BCOM', 'BA'],
      },
      {
        link: '../../../assets/images/header-img-2.webp',
        name: 'IIT Kanpur',
        address: 'kapur,INDIA',
        fee: '3 lac',
        pck: '10 lac',
        courses: ['B.TECH', 'BCA', 'BCOM', 'BA'],
      },
      {
        link: '../../../assets/images/header-img-3.webp',
        name: 'IIT Kanpur',
        address: 'kapur,INDIA',
        fee: '3 lac',
        pck: '10 lac',
        courses: ['B.TECH', 'BCA', 'BCOM', 'BA'],
      },
      {
        link: '../../../assets/images/header-img-1.webp',
        name: 'IIT Kanpur',
        address: 'kapur,INDIA',
        fee: '3 lac',
        pck: '10 lac',
        courses: ['B.TECH', 'BCA', 'BCOM', 'BA'],
      },
      {
        link: '../../../assets/images/header-img-2.webp',
        name: 'IIT Kanpur',
        address: 'kapur,INDIA',
        fee: '3 lac',
        pck: '10 lac',
        courses: ['B.TECH', 'BCA', 'BCOM', 'BA'],
      },
      {
        link: '../../../assets/images/header-img-3.webp',
        name: 'IIT Kanpur',
        address: 'kapur,INDIA',
        fee: '3 lac',
        pck: '10 lac',
        courses: ['B.TECH', 'BCA', 'BCOM', 'BA'],
      },
      {
        link: '../../../assets/images/header-img-1.webp',
        name: 'IIT Kanpur',
        address: 'kapur,INDIA',
        fee: '3 lac',
        pck: '10 lac',
        courses: ['B.TECH', 'BCA', 'BCOM', 'BA'],
      },
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}

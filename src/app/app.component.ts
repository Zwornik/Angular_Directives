import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 3;
  title: string = '';
  url: string = '';

  getClass(i: number) {
    if (i == this.currentPage) {
      return 'active';
    } else {
      return '';
    }
  }

  getDisabled() {
    if (this.currentPage == 0 || this.currentPage == this.images.length - 1) {
      return 'disabled';
    } else {
      return '';
    }
  }

  setCurrentPage(i: number) {
    this.currentPage = i;
  }

  checkWindowIndex(i:number) {
    if ((i -3) <= this.currentPage && this.currentPage <= i + 3) {
return true
    } else {return false}
  }

  images = [
    {
      title: 'Tu nigdy nie byłem',
      url: 'https://images.unsplash.com/photo-1678728934705-53a381237cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    },
    {
      title: 'Tu też nie byłem',
      url: 'https://images.unsplash.com/photo-1575761410364-8a3eb7e4edfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    },
    {
      title: 'Nigdy tu nie wchodziłem',
      url: 'https://images.unsplash.com/photo-1599544593314-090522e0c29d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Nigdy nie byłem',
      url: 'https://images.unsplash.com/photo-1672243775941-10d763d9adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      title: 'Tu nigdy nie byłem',
      url: 'https://images.unsplash.com/photo-1678728934705-53a381237cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    },
    {
      title: 'Tu też nie byłem',
      url: 'https://images.unsplash.com/photo-1575761410364-8a3eb7e4edfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    },
    {
      title: 'Nigdy tu nie wchodziłem',
      url: 'https://images.unsplash.com/photo-1599544593314-090522e0c29d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Nigdy nie byłem',
      url: 'https://images.unsplash.com/photo-1672243775941-10d763d9adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },    {
      title: 'Tu nigdy nie byłem',
      url: 'https://images.unsplash.com/photo-1678728934705-53a381237cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    },
    {
      title: 'Tu też nie byłem',
      url: 'https://images.unsplash.com/photo-1575761410364-8a3eb7e4edfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    },
    {
      title: 'Nigdy tu nie wchodziłem',
      url: 'https://images.unsplash.com/photo-1599544593314-090522e0c29d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Nigdy nie byłem',
      url: 'https://images.unsplash.com/photo-1672243775941-10d763d9adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },    {
      title: 'Tu nigdy nie byłem',
      url: 'https://images.unsplash.com/photo-1678728934705-53a381237cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    },
    {
      title: 'Tu też nie byłem',
      url: 'https://images.unsplash.com/photo-1575761410364-8a3eb7e4edfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    },
    {
      title: 'Nigdy tu nie wchodziłem',
      url: 'https://images.unsplash.com/photo-1599544593314-090522e0c29d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Nigdy nie byłem',
      url: 'https://images.unsplash.com/photo-1672243775941-10d763d9adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    
  ];
}

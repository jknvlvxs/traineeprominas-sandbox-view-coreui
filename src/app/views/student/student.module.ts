// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Me
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatListModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatTableModule, MatToolbarModule, MatPaginatorModule, MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


// Forms Component
import { CreateComponent } from './create.component';
import { StudentsComponent } from './students.component';
import { StudentIdComponent } from './studentid.component';
import { UpdateComponent } from './update.component';


// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';


// Components Routing
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatListModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatTableModule, MatToolbarModule, MatPaginatorModule,
  MatFormFieldModule,
  HttpClientModule,
  // HttpModule
  ],
  declarations: [
    CreateComponent,
    StudentsComponent,
    StudentIdComponent,
    UpdateComponent,
  ]
})
export class StudentModule { }

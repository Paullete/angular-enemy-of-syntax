import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyCoolComponent } from './Intro-To-Angular/my-component/my-component';
import { NealComp as ThisIsNeal } from './Intro-To-Angular/Neal-Component/neal-component';
import { TheSecondComponentComponent } from './Intro-To-Angular/the-second-component/the-second-component.component';
import TheInterpolationComponet from './Basics/Data-Binding/inter-polation-component/inter-polation-component';
import { PropertyBindingComponent } from './Basics/Data-Binding/property-binding/property-binding.component';
import { EventBindingComponent } from './Basics/Data-Binding/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './Basics/Data-Binding/two-way-data-binding/two-way-data-binding.component';
import { StructuralDirectivesComponent } from './Basics/Directives/Basics/Directives/structural-directives/structural-directives.component';
import { ParentComponentComponent } from './Basics/Component-Data-Binding/parent-child/parent-component/parent-component.component';
import { ChildComponentComponent } from './Basics/Component-Data-Binding/parent-child/child-component/child-component.component';
import { TheParentComponetComponent } from './Basics/Component-Data-Binding/child-parent/the-parent-componet/the-parent-componet.component';
import { TheChildComponentComponent } from './Basics/Component-Data-Binding/child-parent/the-child-component/the-child-component.component';
import { MainComponent } from './Projects/shopping-app/main/main.component';
import { HeaderComponent } from './Projects/shopping-app/header/header.component';
import { CardViewComponent } from './Projects/shopping-app/card-view/card-view.component';
import { CardComponentComponent } from './Projects/shopping-app/card-component/card-component.component';
import { AddItemComponetComponent } from './Projects/shopping-app/add-item-componet/add-item-componet.component';
import { ParentLifeCycleCompComponent } from './intermediary/Life-Cycle-Events/parent-life-cycle-comp/parent-life-cycle-comp.component';
import { ChildLifeCycleCompComponent } from './intermediary/Life-Cycle-Events/child-life-cycle-comp/child-life-cycle-comp.component';
import { CustomDirectiveComponent } from './intermediary/Directives/custom-directive/custom-directive.component';
import { MyDirectiveDirective } from './intermediary/Directives/my-directive.directive';
import { RenderDirectiveDirective } from './intermediary/Directive/render-directive.directive';
import { HostListnerDirectiveDirective } from './intermediary/Directive/host-listner-directive.directive';
import { MainBanckComponentComponent } from './Projects/Banking-App/main-banck-component/main-banck-component.component';
import { NewAccountComponentComponent } from './Projects/Banking-App/new-account-component/new-account-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCoolComponent,
    ThisIsNeal,
    TheSecondComponentComponent,
    TheInterpolationComponet,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    StructuralDirectivesComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    TheParentComponetComponent,
    TheChildComponentComponent,
    MainComponent,
    HeaderComponent,
    CardViewComponent,
    CardComponentComponent,
    AddItemComponetComponent,
    ParentLifeCycleCompComponent,
    ChildLifeCycleCompComponent,
    CustomDirectiveComponent,
    MyDirectiveDirective,
    RenderDirectiveDirective,
    HostListnerDirectiveDirective,
    MainBanckComponentComponent,
    NewAccountComponentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investiments' , () => {
    let investiments = component.investiments;
    expect(investiments.length).toBe(4);
    expect(investiments[0].name).toContain('Itaú');
    expect(investiments[3].name).toContain('Inter');
  });

  it('(I) should list investiments' , () => {
    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.listItens');
    expect(investiments.length).toBe(4);
    expect(investiments[0].textContent.trim()).toEqual('Itaú | 100');
    expect(investiments[3].textContent.trim()).toEqual('Inter | 100');
  });
});

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from './products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 // This property is bound using its original name.
 @Input() title: string;
          
 // this property value is bound to a different property name
 // when this component is instantiated in a template.
@Output() productSelected= new EventEmitter<void>();
  products: Products[] =[
  new Products (' A Red Headphone', 'this is a simplt test','https://pcbonlineshop.com/var/photo/product/2000x4000/4/176/4.jpg'),
  new Products (' A Black Piano', 'this is a simplt test','https://lh3.googleusercontent.com/proxy/QMwfz13Dgh6joZ8gPPNUiVEbeOhKOem4Wsad8dyPhJ3-Aym94G2CgcShhYISy9dVpGCFwWrypL-atMWKJW1_dJz2jxymCn20C5466FbdGCV57Hs7jphg'),
  new Products (' A Red Piano', 'this is a simplt test','https://i.pinimg.com/originals/3d/58/b9/3d58b99e69a79a3edab085acf01695f8.jpg'),
  new Products (' A Black Headphone', 'this is a simplt test','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhUSExIVFhUWFxUVFRcVFxUVFRUXFxUWFhUVGBUYHSgiGBolGxUXIjEhJSkrLi8uFx8zODMsNygtLisBCgoKDQ0NDg8NDysZFRkrNy0rKysrLS0rLTctKzcrKy0rKystNysrKys3KysrKysrKysrKysrKysrKysrKysrK//AABEIAN8A4gMBIgACEQEDEQH/xAAcAAEAAAcBAAAAAAAAAAAAAAAAAgMEBQYHCAH/xABLEAABAwIBCAUGCwUHBAMAAAABAAIDBBEhBQYHEjFBUWETInGBkRQjMkKh8DNSYnKCkrHBwtHhQ2OTorIIJHOjs7TxFXSDwyVEZP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A3iiIgIiICIiAiLDs8NI1Hk4mMu6acfsoiCWn947YzbsOPIoMxWP5w560NBcVFSxrx+zbd8vLzbLkdpsFonOfSXX112iXyeI/s4CWm3ypfSd3WB4LGKSgB6zt+Nt55lWDb+UdNYcSKSjc4fHncGN+oy5PiFjddpGynN/9hsQ4QRMHdrSa58CFiEtQ1g3DkrfLlTggyifOCseburavuqJmDwY4Be0+cVZGbtrar6U8rx4PcR7FhzspFG5RKDaWSdJuUIba8jKhu8SsDXnsfEAB3tK2Dm9pNo6khkpNNIcAJSOjcdlmyjDbudqk8FzpFlFV8NWHIOsgi5+zOz4qMn2YCZafAdC4+gP3Tj6HzfR7Nq3fkDLkFdEJoH6zdjgcHsdvY9vqu/5FwbqC5IiICIiAiIgIiICIiAiIgIiICIiAoZJA0FziAACSSbAAYkknYFEtHaYM9zUPdQU7/MsNp3NPwrwcYr/EadvEi2wYg0gaU3zl1PQuLIsWunGEknHoztYz5XpHdbfq7VUa9YzWNlUTKOC/WOwbFmOaeY9TlPrMIigBsZngnWINiI2Ya5Gwm4AO8kEKbo8zQOUputcU0JHSkXBe7a2FpGy4xcdoFt7gR0DBC2NrWMaGtaA1rWgBrQBYAAbAAitZQaD6H9rPUyH50bB4Bn3qVWaCqBw83PUsPNzHjvBYD7VtVFBzxl7QdWw3dTSx1AF+qfMycgA4lp+sFrTKWTpaaQxTxPikG1r2lru3HaOYwK7SVqzizcpsoRdFUwtkb6pOD2H4zHjFp7EHHIcpsc5CzjSLoynyWTLGXTUt/hLdeK+wSgeGsMDywWAkIq9UeUOKynNvL8tHKJ6dw1sA9pvqSt26jwO02dtaThvB1611lcaGvLTjsVSOs8184ocoQCaI29WRhtrxPtixw77g7CCCNqu65szQzkkoZxURdYEBssd7dKwY24awuS07jfcSuicl5QjqYmTxO1o5GhzTsw4EbiDcEHEEEKCqREQEREBERAREQEREBERAREQYVpUzr/6fSasbrVE92RW2sHry/RBFubmrnVoWT6R8umur5Xg3jjPQxcNVhILh85+s6/At4LGwqiEhV2SKJ8z2RRi8krhHGN1ydp4AYkncAVRELbGhDIWvLJWOGEQ6GL57gDI7uaWj6bkG0c2siR0FNHTx4hg6zjte84veeZNz7NyuiIooiIgIiIIZYw4FrgC0gggi4IOBBB2hc7aXNGvkBNXStJpXHrs2mBxOH/jJ2cDhwXRal1EDZGOY9ocxwLXNcLhzSLEEHaCEHE5CArNtKGZByVU2YCaaW7oXHHV+NE4/GbuO8W33WFWRVyyXXahsdi29omzr8nm8lkd5md3UJODJjgByD8B863xitHgq+5Jq9YapJ5WNj3EbCqjr5Fi2jnOM19I0vPnoj0U3NwHVk+k2x4A6w3LKVAREQEREBERAREQEREBY9n/ljyKgqJgbP1NSM/vJOow9xdfuWQrUH9oTKhaykpWn4R75XdkbdVoPaZD4INQxMwsBswU1sJPvf7FNhiG8+PHs3KpncADYbuGzC21aRaX1Aa4CxO/DtAGG/ErqHMXI3kVDBC4WeG68v+I/ryDuc4jsAXOWj/J3leVaWMglvSte7gWwtMpvyJAHeurFFERFAREQEREBERBZM8c3I8pUslNJhrC7Hb45B6Dx2HxBI3rkvKeT5KaWSCVurJG4seOYNsOIO0HeCCuz1pL+0FmuAY8oxt22hqLf5Uh/ov8ANQaSIUyCTVIKhIUKDa+izOEU1XGSbRz2gk4AuPmnHsebdkhXQa47yPPtYSceGBHYdxXVGZGWTW0ME7jd5bqybvOMJZJhuBc0kciFRfERFAREQEREBERAREQFzzpqqDNlXVv1YIY47cHOvIfY9vsXQy5kz6n6TKVY/wDfub/DAi/AmCzMbZRrwBRALSM80IUYflCWU/soCByMjmAexrvFb0Wo9AkIvWv33hZ4CR34ltxZUREQEREBERAREQFbs4skMraaamf6MrHMvwJHVcOYNj3K4og4trKZ0Uj4niz43OjeODmOLXDxBUhbH065E8nykZmizKlgk5a7epIPYx301rqyCKmfquBW/NBeVriemJ+LOzvAjkt4R/WK0EwLYeijKnQV9M6+D3GB3ZKNVo/iCPwQdJoiICIiAiIgIiICIiAuVcrP1qqpd8aoqHfWme7711UuUqsWllH7yQfzlXBA0KYAjApllUbW0CM8xVu//QB4RMP4ltJay0Dj+7VX/df+iFbNWVEREBERAREQEREBERBq7+0DkvpaCOoAxglbc/Il6hH1uj8Fz+IydgJ7l1rnxk7yrJ9VCBcuhk1fnhpcz+YBcnGQWb5ov1mj1nDusN/NB42E3tgL7LkA+G1VGTspGCQEC5Y5sg7Y3B4t3hesDwLNayFu0guGs7kS7HwVM+G8oIIt+eCo7MikDmhw2EAjsIuFErJmRUGXJ1G93pGnh1vndG0O9oKvagIiICIiAiIgIiIC5ZyuzVq6pvxampb4TvH3LqZc1Z7w9HlOsb++c7+IBJ+NXBa2BTbKCNTCqjZWhSvjhhrelkZG1s0by57msaA6IDEuNvUKzOTSBktpsa+n7pA4eIwXMmV4wX3PDBUllFdaZNzqoak6sNZTyO+K2Vhd9W91eFxoIwdousozcz1r6CwincWD9lLeSO3AAm7B80hIOo0WCZlaTaevLYZR0FQcA1xvHIeEb+PyTY8LrO1AREQEREBERB4Rdcc1sZikkiufNvfHbZ6Ly3Z3LsdciZ1ttXVg4VVSP896uC1loFrHdjyNzh9niooHdYKBTac9YKo6g0Wz6+S6Y8GvZ9SV7PwrK1hmiA//ABUHz6j/AHEpWZrKiIiAiIgIiICIiAuftLcAZlWU2+EjhkPPq9Hf/LXQK0fpyh1a+F/xqcD6kjz+NXBg8ZUxxUlimKotWV27Crc1Xmuj1mkKxQvs7UPdzUFUwX5KqjbuO1SI2qriFxY7FRF0F1tjRrpEc0tpK19wbNhnccRuEcrjt5PPfxWr4cDqnuPH9VUGAEWIUHUyLWuirO4yAUNQ68jR5h7jjIwD4Mne5o2HeByJOylFERYXn3n/ABZPBijAlqLehfqx3GBkI8Q0YnkMUGVZRyhFTsMk0jI2D1nuDRfcMdp5LBcq6XqOM2hjlm5gCNni/rfyrUeVssTVkhlqJHSOxtf0Wgn0WNGDR2d91bnFWDZ8um14OFALc5zf/TWoct1PlFRPOG6vSyyy6t76vSPc/VvvtrWuqiZqoXoikuptOesO1RyR3F96l0Yu8Dmg6c0RstkqC+91QfGpmt7LLMVjujuLVyZSfKha/wDiecv/ADLIlFEREBERAREQEREBaY09N/vFGeMc48HxfmtzrSmnOS9ZTt+LC4/Xkt+BBgEajKhYFHqrSJEgVhyrTEHWbtGP5rIntVHUxXCgtNJV39LDnu7+CvELVZuj1HcvsP5K4UsmpgfR/p/T7EVcgy4sf+FNhkPou2j2jijAkzCRcek3ZzG8e/JVFXBI5rmvY4te0hzXDa1wNwR3rfmZecLcoUzZMBI3qStHqvAxI+Sdo7eS59ikuAdxV9zZzklydI+WMBwexzXMJsC6xMbj2O9hKg2NpLz68hb5PAQal424EQtPrEb3HcO84WvoqWUlxLnEkkucXG5cSbkknaScbqKrq3yvdJI4ue9xe9x2lx2n9NwsNypJXfry/VBMkntgP0VLLVu4+wKVLLbAKjklQXOnq9e4O0Y9oUicKnoWnXae0ewqpqNqCOlFx3/cUZFqvDuF/YLqOkbgOZJ8Bb71MqWawI2Egqjq3IdP0VNBGPUiiZ9VgH3KuVrzYys2tpYahuHSMBIHquHVe3ucHDuV0WVEREBERAREQEREBaA0wVQdlOTH4OKGP2GS3b51b/XNWk0n/q1YP3kf+2ht9yuDHXvJO09gOH6/YoRyw7MPsXiic0jaLXFx2HeqibHUkbcR7f1Ux5BxCpbKJjrIJFTHdSoHW6p+ieI/MKqnCoyL4b9re39diC6ZNn9Q7vR7OHd77FcLrHWSnB42jHvV9ilDmhw2EXQGdVxG53WHbvHvzVQw3wVLJiMNresPvHvxUTJd/FBRVceo5x3bR2nd4q3zSq6ZYF2h3A/bgrDM9QS5X3Ngp8FOvaSnuri2OyKk08VnDkCfZ+qk1BVYDZpdxwHYNvt+xUTOs7kMT3bvuVRW0rLdwA79p+23cplsVGxlmgHbtPacT7UtgSg3HoKyjrU81OT8E9j28myt2fWY4/SWzlpTQY8isqGjYYAT9GRoHscVutZUREQEREBERAREQFzzpjo+iyrI62EscUl9xIb0R/0guhlqvTxkYvhhrGj4Fxjk+ZJaxPY4AfTVwaZcq7U6VrcQC3qns3e/NUJChknLBrbvW7DgT3Joq5Kew1muDgNtto7uCkLxtUGDXuLewgr1/Lj99kEL1RSHFVsmz371QzFVEQOJ+V1u/f7ce9V2SZsHN4G47D+oPirYx2I7/b/wp1BJaUjiD9xUVemyWIVM2XVu3gcOzaPYoZJFInf178QD7+KqKqofrMI5H9FY4W6zldGOVuodqgu1PHYKY5tzYd55b14x+GCgnl1RbfvVFPXTXwGwYKZk6Dee0/hH3+CpY2axv7k/krtELC3uTxQRvUt36+H62URKkSP9v2e/3INoaBqa81VL8VkTB9Jz3H+gLci1xoOyeY6KSYj4aU25tjAb/VrjuWx1lRERAREQEREBERAVHlfJzKqCSCQXZIxzHcRcbRzG0cwqxEHKGVcmSUk0lNKLPicWncHD1Xt+S5tiO1Uq33pVzK8vi8ogbepiGAGBmj2mP5wxLeZI33GhAe0EYEEWIIwIIOwqopxQx31gOfLwVSV5ZegIPJPRPYfsVum2lXCZ1gfD8/Yra8qiBhxCjpj50nkpQfYk8FFSb3cVFXBz1A44t7D7+xSi5e3xHZ9tiqipaVTRUbgdtgqmixdfh7hR1VSoPbho2/mqOWTWPJS3zay9agq6d1vfYqtr1b2FT2vVE+SRMl0j6iVkUY1nyODWjiSd/AbydwBO5Uc0oG0reOh7Mk0zBW1DSJpG+aY4WMTD6xG57hu2gYbSQoNg5CyY2kp4qdmIjYG33uPrOPMm5Paq5EUUREQEREBERARLry6D1F5dNZB6tcaRdGja0uqaXVjqdr2nCOfmfiyfK2HfxGxtYLzXCDkushkgkdDNG6ORvpMeNVw52O0cCCQdyg6Qe/6LqTLuQqWuZqVMLJAPRLh1m82vHWaewrW+XtC8RBdR1LmO3RzddnYHtGs3tOsrRpmokuqOR9lkmcebVVQYVUMjGg4SMAfCb2/atO/DB1jyVgPR/Kd2kAezFBRRxF+3Bo2n7u1Vd/DcvHPvyA2AbAvLoIgomuucO5XDN7IFRXy9FTx6zsNZxwjjB9Z7/V7Np3AradXoXYKZogqv70AS8yDzMhPqgDGMDjjzB3KNUlwjbbWF9pwN/G6oJXX3k+wK8ZwZrVtET5RTva0X840dJFbj0jLgD51jyViDroJkantCpg4DestzfzFr60XjgLGbnzXhafm6wu7tAITBjoHBOkxEbAXvcQA1oJc4nYABjfkFtDJmhed5HlNZFE3e2AOkcR/iPDQDzsVsvNLMmgyYL08QMlrGaQ68p49Y+iDwaAEownRjosdE5tZlBoMgs6KA2IjO0Pk3Fw3N2DabnZt9QdIOKdIOKgjRQ9IOKa44oIkUOsF7rIPUXl0ug9ReXXqCWQoS1Tl5ZBJLVAWlVNk1UFE5hUtzHK4Fq81EWrU6OTipT4peKvXRqExoVj8tPOQRdtjgQRcHtCw7LGjOCoJd0UcbjviDo8eOqDqnwW0OiQxINHv0Lu3VJtzYD7QQq7JmiKOI3kPTcnFzW+DCCe8rcPRLzokRi2TckGnYI4mRxsGxsbdVvM2G/mqwUj95V96FedCi1Y/IXcT4lWiozGopHFz6SEuO0ljbntKzPoU6JBidDmhSwG8UDGHiwap8QroygtvP1nH71eOhXvQoLY2ltvPtUxsJ4q4dEvREhVEIyowwqrEa96NCqUMKiDFU6i91UKkBqi1VO1UsiJQaog1TEQQaqKNEH//Z'),
  ];
  constructor() { }

  ngOnInit()  {
  }
onSelected(){
  this.productSelected.emit();
}


}

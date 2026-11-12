import './App.css'
// import Card from './components/Card';
// Usage

// import DigitalClock from './components/DigitalClock'
// import Table from './components/Table'
// import RadioButtonAndDropDownList from './components/RadioButtonAndDropDownList'    
// import Skill from './components/Skill';
import { useState,useMemo } from 'react'



function App() {
  const [num, setNum] = useState(0)


  let number = useMemo(() => {
    new Array(30_000_000).fill(0).map((_, index) => {
      return {
        index: index,
        isMagical: index === 29_000_00,

      }
    
    })
  }, []);
  function btnClick() {
    setNum(num + 1);
    
  }

{/* const jobCardsData = [
    {
      id: 1,
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/3840px-Amazon_icon.svg.png",
      company: "Amazon",
      timeAgo: "5 days ago",
      title: "Senior UI/UX Designer",
      employmentType: "Part Time",
      experienceLevel: "Senior Level",
      salary: "$120/hr",
      location: "New York, USA"
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company: "Google",
      timeAgo: "2 days ago",
      title: "Full Stack Developer",
      employmentType: "Full Time",
      experienceLevel: "Mid Level",
      salary: "$140/hr",
      location: "Mountain View, CA"
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      company: "Microsoft",
      timeAgo: "1 week ago",
      title: "C++ Software Engineer",
      employmentType: "Full Time",
      experienceLevel: "Senior Level",
      salary: "$135/hr",
      location: "Redmond, WA"
    },
    {
      id: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      company: "Netflix",
      timeAgo: "3 days ago",
      title: "React Frontend Engineer",
      employmentType: "Contract",
      experienceLevel: "Mid Level",
      salary: "$150/hr",
      location: "Los Gatos, CA"
    },
    {
      id: 5,
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      company: "Apple",
      timeAgo: "Just now",
      title: "iOS Systems Developer",
      employmentType: "Full Time",
      experienceLevel: "Senior Level",
      salary: "$160/hr",
      location: "Cupertino, CA"
    },
    {
      id: 6,
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlgMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAGBwAFAQMECAL/xABLEAABAwMBBAUHBwgHCQEAAAABAgMEAAURBgcSITETQVFhcRQiMoGRobEINkJSdLLBFSMkcnOCwtEzNEOis+HwFzVVYmOSlNLxFv/EABsBAAEFAQEAAAAAAAAAAAAAAAABAgMFBgQH/8QAMxEAAgEDAgQDBwMFAQEAAAAAAAECAwQRBTESEyFBMlFhInGBkbHR8CMkoRQzQsHhQxX/2gAMAwEAAhEDEQA/AHjQBKAJQByz7hFt7Cn5jyWW081KNOhCU5cMVliSkorMtgCu+09ltRRaYZeA/tXiUp9nM+6rqhok5dassFZV1OC6QWQfc2kX9SyUKioB6gz/ADNd60a2x1z8zkep1vQ6Ye067tKHlcWLIT1hILZ9vH4VHU0Si/BJr+R0NUqLxLIbac1xaL0pDG+YstXJl7rPYlXI/HuqoudNr264n1j5osaF7SrdNmE4INV52GaAME4oAqL3qK32ZvMp3K+ptPFR9VdFva1biWKaIK9zSoLM2BM7aNNWsiDEaZR1KcJUT6uGKvaOhU0s1JZ9xS1dZk3inH5nEjX99SrKlRljsLX8jU70W2a7/Mh/+vcenyLy07RmlrSi6xSz/wBVklQ9aefszXBX0OcVmlLPo/z7HZQ1iDeKqx6hvEmR5kdD8V1LrSx5q0HINUk4SpycZrDRcwnGa4ovKOimjiUASgCUASgCn1JfY1jgqfkKG9jzU9ZNS0KE68+CAypUjTi5S2Erf79NvksvSnDuA+Y0DwT/AJ1sLSzp20cR38zOXN1OtLrt5FVXWcpKUQlAEoFyMPQ+u1x1tW69ulbJwlqUs8UdgX2jv6uvuoNR0tPNWiuvdfb7FvaX7WIVH08xpJVvDPwrOlyCWsdWJtaDFhkLlKH/AGd9WFhYyuZdekV+YOG9vI20POT7CukyHpTynpDinHFcSpR41rqVKFKChBYSMrVqzqTcpPLPlttbqt1tClnsSM0s6sKazN4Fp0Z1HiCyZcYda/pGlp/WFRxu6E3iM0STtK8FmUGfFdG5zFnYL7MscoOxVbzaiOkZV6Kx+B764ryyp3McS37PyOu1u6lvLMdu6HDZrrHvEFuXEVltXAg80nsPfWPr0J0Kjpz3NXQrxrQU4lhUJMSgCUAc8+U3CjOPvKCUIGcmlSy8IBE6pvjt8uK3lKPQoOG0/jWw06zVvT6+J7mcvbl1p4WyKarA4Qi0tpKfqBXSI/MxEnCnlDmesJ7arr3UIW3s7yO61s5V+uyDlvZnbktAF1al44qJ51Qy1a5bznBbR0+3SxgG9Q6AkwEKehkutjievFddDWKieKvVfIgq6ZBr9PoBTja21lDiSFDqNX9KrCrHii+hTVKcqcuGSMVIMQaac1zIt9mdtz4U4pCcRXM+iOW6e4dX/wAqlvNKVWsp0+md/uWdtqHKpOM+uNvsUD77kl5bzyipxZySauKNKNGChHZFLVqyrTc5bsvdJ6Zevr/SOFTcJs4WvrUewVwajqCtlwx6yZ22Fi7h8UukV/I1LfZoEBlLUeM2kAdlZSpWnVlxTeWaenTjTjwxWEZmWiDMbLb8dBHbjlTFJrYeLjV2kV2wmTDBWwTxTjimrex1KdJqM+sfp+eRWXunQrJzh0l9QRrUwkpLK2MxOLi8PcvdH35VjuYLij5G8Ql9PZ2KHeKr9Rsv6ml08S2+x22F3yKnXZ7jlbUFJCgQQeII5Gsca1H1QBKAFxtSvZQhFtYX5yvTwattKtubV4pbI4NQr8unwrdivIrVmdLnSljc1Bd2oicpaHnvrH0UD8TyrjvrpW1Jy79jqtKDrVOHsPeHEYhR248VsNstpCUITyArGTm5ycpbs00YqKwtjfTRT5UlKkkKGQaAFzr7SQKFToKOPNaQK77K8lbzz2e5y3VtGtH1FmpBSopUCCDWup1I1IqUdmZqcJQlwy3MDhTxheabtr18uLUJnI45cV9VA5n/AF11z3d1G3pOcvh6sfQtZVqqgth326ExAhtRYqNxptOEjHv8axVSpKrNzk8tmsp04wioxXRHVTB5KANUhht9lTTicpUMEGgBN6ss6rRc1oSn80vimtHo928cmXwKLVrRf3o/Eo6v3sUCGts5vBnWcw3lZehkJ48yg+j+I9VZHV7bk1uOO0vqanS7jm0eF7xC+qsszVJdDLC3FckjNCAQeo5yrhd331HPnYFbDTKPLt1nd9TN39bjrNLZdCsxViziQ49mVmFvsCZbiMPzT0h7kfRH4+usjq1w6tdwW0ehotPo8ulxPdhjVYd5KAJQBreQhbakuAFJGDmhAI7WEWMzeJCYRykHiBWo0dVOW2/D2/PL/ZQapOnzFFbg/VwVhY2C7PWW6sTmCTuHC0Z9NB5p/wBdeK57q2jcUnCRPb1nRqKSH1bprFwhMy4qwpl5IWg9386xU6cqcnCW6NTCanFSWx1UwcSgCUACu0C1ibaVPJTlbXH1VNQqOnNSj2I6tNVIOL7ikrdU5qcVJdzFVIOnJxfYItB3AwNSR0k4akgsr9fL3ge01X6tR5ts33XU7tLrOncJdn0HGOVY81YP62mGHYXyDhSxgVJSg5zUUNnLhi5MR6uJz1mt5GKjFJGOlJyeWb7dDVPnx4iM7z7iUcOrJxTK1TlU5T8kPpRc5qK7noVhtDLKGm0hKEAJSB1AcqwWW+rNelhYNlApKAJQANa2vibVblNtqHlDgwkdldVnbSuKqgjnubiNCm5sUK1KWtS1klSjkk9ZrbQpxhFRjsjHTqSnJyluzifRuqyORobWcE0MuOTVSjhgbLdQeTyVWaUv82+SuOVHkvrT6+fj41Q6zacS58e2/wBy3024w+U/gNWs4XRKAJQBzzmRIiOtEZ3kkUqeAEVcmDGuD7RGN1VbDSqnHbpeXQyuqU+C4b8+ppbcW04l1s4WhQUk9hHEVYTipJxfcr4NxaaH9FfTIjNPI9FxAWPAjNefyi4ycX2NxGXFFMCdqcjct7LOfSPGu7TY8VzH826nLfy4beQrSONbMymQm2dRfKNVxVHkylbmO3AwPeRVZq8+G1kl3wix02PFcL06jmFZA0xmgCUAc86U3DiuPuqASgZpUsvAbdRK6hurl3uLj6idzJCB2CthptpyKWX4nuZTUbvn1cLwr8yV7LS33m2WkFTjighCe0k4ArvnOMYuUtkcEIuUlFbsNNTaNTCsEdbA3n2kjplAekrHGspHUJu653b/AEav+iirblfmRcKBScHnWqhJTipLZmflFxbTPpl1bLqHWllDiFBSVDmCORFEoqSaezCMnF5Q+NI3xF+tDUoEB9PmPoH0Vjn6jz9dYq8tnbVnB7dvcae2rqtTUu5d1ynQSgDB40AJjW7HQagfA+kc1pNDn0nH3FDrUfBL3lFV+UI6dGv+U6XtznPDW4fFJKfwrEahDgupr1+vU2NjLjtoP0BPaorLsZHVjNdOkL9wvj9CHVHi2fwF9gVrjL5DXZU2FX2SvrTGP3hVJrj/AEIr1/0XGjrNWT9BqVlzQkoAwTjnQAuNol+6Rf5Njr4Di4R8KutIs+ZPmyXRFTql3yocuL6v6f8AQDrUmZDnZpY/KJKrs+nLbRKGcjmrrPq5es1n9ZusJUI99y80m2y+dLtsMaQwh9hbTgylQwRWcRoBIa0sq7TdHAE4aUcpPVWk0i7yuTL4FNqVv/6r4g7V6U4SaG1CqwXhKnlfob+EPjqT2K9XwJqv1G0/qaXTxLqvsdllc8mp12Y8EKC0hQIIPEEddY40u59UASgBS7SUbt8yOtNX2hv9SS9Cm1lfpx94KCtKZwb+zxROkofcpwf31VjdWX7yfw+iNZpj/ax/O4ObU04fjKxwwak0h/uF8foJqi/bP4fUACONa4ywZ7LXQ3f321Hi5HOPUQapdcjm3T8mW+jy/Wa9Bq86yxoyUAUGrr4iz25ZSr8+sYQK6LW3lcVVCJDcV40KbnITj7q33lvOneWs5JrbUaUaUFCOyMdWqyqzc5bs32uA/c57EOOMrdVjP1R1k9wHGm3FaNCm6kuwtCjKtNQj3HjbYTVugsRI6cNspCR39/iaw1WpKrNzluzZU6cacFCOyOqmEgN62sibtanCEjpWxlJqWjUdOakhs4KcXFiRkMrYfW0sYUk4xW0tq8a9JTRlq9J0puLMJ510EGRq7M9ReVxBaJS8vx0/mCTxW32eI+HhWX1ez5c+dDZ7+/8A6X2nXXMjy5boPqpi0JQAptpCwq+AA8k8av8AQ17cn6FLrTxTivUExWkM6OHZ8jc0nCyPSLh/vqrGarJO8n8PojW6asWsc/nUrdpsQuW5t8JJCDxxUVlV5deMvJk91T5lGUV5CwrbrYxjO2yXBdpusac2CotKyU/WSeBHsJqC7oKvRlTfcntqzo1VNdh2224RrlERJhupcaWOBHV3HsNYirSnSk4TWGjYUqsKsVKDyjRebzFtEVT8pxIwOCetR7BS0aNStLhgssKtWFKPFN4Qnb5dnrxOVIeJ3eSE9grYWNlG2hju9zK3t5K4nnstiuruOEaezywfk+EbhKQRKkJ80HmhHUPE8/ZWS1a959Tlxfsr+WajTLTk0+ZLd/QMqqS0JQBhQyMGgBU7RtOGNIM6M3+bWcqx1VbaZecmfDLZ/mTgv7bmw4o7oBAMVqk8mbZvhyXoclqTGWUPNKCkKHUabUpxqRcJbMWE3CSlHdDs0rqeLf4iSkpbloH51gniO8dorHXtlO1n16x7M09rdwrx9fIt5cpuLHW88sIQkZJNccU5PCOptJZYk9Q3AXO7PyRxSVYSe6thpls6FL2t2ZbUrhVqvs7IruqrFvBXJZHrY4hgWiHFPNplKT444++sHcVObWlPzZtbeHLpRj5IzeoKbjbnY6h6SeFRJ4ZMJGdFchSnGHRhSTWx066Valhv2luZPULV0auUujOerErzbHkyIqiqM+6yo8y0spJ9lMnShPxJMfCrOHheDDzzr69591x1X1nFFR99EKcYLEVgJ1JzeZPJ8U8YF2hNMquclM+Yj9DaVlCT/aqH4CqTVb9Uo8qm/af8Fxptk6kubNdF/I1UjA5VlzSGaAJQBKAOW4wmp8Rcd5OUqFKnhgJPU9ies85aVJPRk8FVpdLvuNKlN9e32KHUbNxfMht3KbFXZUG1pSkLStCilSTkKBwQaHFSWGIpOLyjqfmy5KN2TKfdT2OOqUPfTIUKUHmMUvgglWqSWHJte80DnUpGEehrObte21LSTGjEOOHqJ6k+sj2A1WapdKjRwt30RYabbOrVy9l1+w4+qseaozQAKau0o3dkF+OAmQB7a6Le4nRmpRZFWowrQ4JiynWuZAcKJDCk468cK1NtqlGsvaeGZq40ytSeYrKOI8OdWCknsVzi1ufbTTjpCWkKWo8glJOabOrCHieB8KU5+FZDHTOh35i0SLsC1HHHos+cvx7BVJe6xGKcKO/mXFppMm+Ktt5DMjsNx2kNMoCG0ABKUjAArOSbk+J7l+kksI20gpKAJQBKAJQBW3yzxrvEUzISCceaeynRk4voI0nuKW/aTnWt1W60pxrPBSRnhWhs9XWOGt8/uUt1pn+VH5FEUKRwWkjxFXcK1OoswaZTVKVSD9pYPpIyQBxPdUjkkssiUW9i7selrld3U7jRZZz5zrg5eA66rrnVKFFYTy/Q77fTq1V5awvUbdktEWzQExIicAcVKPNZ7TWUuLidebnPc0tGjCjDghsWNQkpy3G4wbXG8puUxiIxkJ6V9wITk8hk0AcMHVOnrjKbiwL5bZMlzO40zKQtasDJwAc8gaALGREjyBh5lC/EUZA4FabtSjkw28+FOU5IGs7nTGtcKLxZjtpI692kcm9wXQ5Z+prBbJKotxvVuiyEgFTT0lCFAHiMgmkA7LZdLfdo5kWubHmMhRQXI7oWkKGDjI6+I9tAHXQBKAJQBKAMZoAzQB8OIQ4kpWkKHYaAK96w2x45XEbz4U7iYEZsNsYVvNxG8+FDnJ7iYSLFDaUABKQAOoCmin1QBKAF7tz+Ya/tTXxNOhuR1PCefoUuRAmMTIjhbkMLDjax1KHKpWsnLGWHk9V6Tv0fUthiXWLwDyfPRni2scFJPgfdg1C1hnanlZLikFKvUl5j2CyS7pL/AKOOgqCOtaupI7ycClXURvB5TulwkXW5SbhMXvyJLhcWe89Q7hyHcKmSwjilLLyPjYL8y3vt7n3UVFPc6aXhGRTSUlAEoAlAHLdMi2yyDg9Av7poA857JJsx7XNnS9MkOJVvZSt1SgfMPUTUsl0IISfG0elRUROZoAlAEoAlAEoAXu3P5hr+1NfE06G5HV8IpNF6YOprLqNMdG9PhtR3o3aTlzeR+8B7QmnyeGRQgpQZe7EtUfkq9qs8pzEO4kdFk8G3gOHhvDh4hNJNdxaUsPhY/wAEYqM6BEbc9U+XXRFhiufo0E78gg8FOkcB37o957qkgumSCrL/ABQOau0wdN6asC5LYTcJwdefyOKB5u6j1A+0mlTyxk4KMUNPYL8ynvtzn3UUye5LS8IQ671jC0hbBIfHTSncpjRknBWrtPYkdZpEsj5SUVkSMrWmudVTFNwZM/PPye1NrQEDtJT52O8mpOFIgc5y2PlvVGvdKyUKmyrs1vHg3c0rcQ53Ar5/umjCewcU49WOjZ5raPrG3LUUBi4R8CSwDw48lJ/5Tx58Rg9xMclgnhJSQrtW6m121qC8Ror10FvTKebbSmDlHRhRAwrc4jHXmnpIjk59gCsku4wLixIshdTNRnoiy30ihwwcJwc8O6nvGOpBFy4soLmNW7SC82FSbwUlQBzbhyz29HTGok6c89T0BfLvCsVrkXG4u9FHYTlR6yeQAHWSeAFRkreFkQGpNqepL3JUi2vrtsRSsNsxv6Ujqyrnn9XFSqKW5BKo30RyRb1tDtGJpe1GGhxUqY0841jv6QEAUey+gZqLqWl+2s324262G3SVW6a30omdChJQ96G4pO8Dj6fDq7+FCh5iyq9Bp7J7tcL3o1ibdJSpMpTzqVOKSBkBWBwAAqN9GSweVkr9ufzDX9qa+JpYbjavhBX5O/8AXr/+yj/FylnuNo+EHtr2mFad1L5dCCmoU9ReZU3w6J0YKgMcuOFDxPZTovKwNqLD4kMaNtJYOzZV+cUk3JseTKZ+tIxw4dhHneGaZw9cEqmuHIudlGnHNT6rVPnhTsWGvyiQtYz0rpOUg9vHKj4d9Pk8LBFSXE8sJvlDelY/B7+CmwFrbF9sG+ZL325z7qKSe4+l4RX7Vrq5eddT0hW8iIvyRkFWAnd5+HnE5/yp8VhENR5eBz6OXpXTFjj2+JeLSHAkKkOiU2C85gbyjx9nYOFRvqdEUkuh13+dpW/WmTbZ93tTjLyCnJlt5QrqUOPAg8QaFlCvDEXs0uK7HtBgJDqSh59UJxSTwWlZ3RjtBUEmpJbHPTeJ4R6QumfyZL/YL+6aiOnsebdj3z7s37/+Gall4Tmh/cZ6cx31EdImPlBXV0PWqztqw0UqkujlvHO6j+OnwRDWeFgs9h2lorNl/wD0MlpLkyUtSWFKGehbSSnzewkg5PhRN9cC0o4iNMpyMHlTCU8/bbdNwbHf4cu3NpYRcUOLcZQMJStBTkgdWd72jvqWDbOetFbjE2HfMCP9oe++aZLclp+E+NufzDX9qa+JohuJV8IK/J4/r1//AGUf4uUs9xtHwjL13ptvVGmpVuO6l8jpI7h+g4OR9fI9xNNTwySUeJHmU2m8BRim23DeDmC2GF43+XZjPVmpco5eXLY9L6A00jSum41v4GQR0klY+k4efqHADuFRN5Z1RjwrAvflD+nY/B7+CnwI62xe7BvmU99vc+6imz3FpeETeuYxh62vrMg4Hl7rhIH0VqKwfYqpI7ENRe2MCPsRMhht9nULS23EBaFCLkEEZB9Km8wk5PqbP9hbv/H0f+If/ajmByTqtOxh233aDOF9Q55LJaf3PJiN7cWFYzvcOWKRzyhY0uF5GpdP92S/2C/ummImPNmx8ga7sueHpf4ZqWXhOaH9xnp0VEdIiPlAMqRqW2vqHmOwylJ7SlZyP7w9tSQIKy2GDscltSNn9uQhQ345cacHYrfUfgQabLckpvMQ3zTR4k/lELSZ1gQFAqS1IJGeQJbwfcfZT4ENbwhbsO+YEf7Q9980ktx9Pwnxtz+Ya/tTXxNENxKvhBX5PH9ev/7KP8XKWe42j4R2UwmMY76AM0AJn5Q/p2Pwe/gp8CCtsXuwXjop77e591FJPcdS8JVbatESZzo1FaGlOuIb3JjCBlRSnOHAOsjkR2Y7KWMsBVhxdUC2hdqkzTkFq3Tov5QgNjDJS5uuNJ+qOGFDuOMdtK452GRq46SCa4bco/QkWyxvqeI4KkvJSlPf5uSfDh40nAxzrIzsm1lqa/ahmJntLmwHiVreSkJREUAMJHcRw3eJ5HtokkhacpPcbriA62pCuSgQaYSnlR9ifofVu6lJbl22RvNb44LQD5p7wpPxNTdGsHK8wnkZ7G3FhbbaVWB4PqIBAkp3M+OM+6mcBKqqYV7U9JL1Tp3diBJuERXSxwfp/WRnqyPeBSReGOnHiQkdHavuuiLjIS0zvtqVuyoT5KPOHDxSoeHtqRrJBGbg8MPpW3JJjfolgWHyOb0kbifYMn3UzgJOchaalk3q7LYv983lflAuCOsjCVJb3c7qepI3wB28efOnprZEU1J9WPDYd8wI/wBpf++ajnudFPwhjebTb71CMO6xW5UYqCujc5ZHI00ec1i03ZrAp5VmtzMQvABzos+cBnGfafbRkMYLegCUASgCpvunLNfy0bzb2ZfQ56PpAfNzzx7BSiM3WWz26yRDFtMRuKwVlZbb5bx4E+4UgpYUAC170Bpa9yFPTrS2H1HKnWFqaUo9p3CM+ulyxrimcMTZRo2K4HPyWp4jiA/JcWn1p3sH1ijiYcEfIMYsWPDjoYiMNssoGEttpCUgeApBxuoAp9QaYsuo20t3mA3J3PQWSUrT4KSQR7aVPAjSe4Px9lGjY7yXhbHFqSoEBct0jPhvcfXRxMTgj5BxSDig1DozT2o1hy721t54DAeQpTbmP1kkE+ulyxHFMqrfst0fBkJfTaumWk5HlD63Ej90nB9Yo4mIopF5etNWW+eTC7W5mUI4IZCxwQFYzjH6o9lIK0dNptUCywkw7VFbjRkkqDaOQJ50Cn//2Q==",
      company: "Meta",
      timeAgo: "4 days ago",
      title: "Node.js Backend Engineer",
      employmentType: "Full Time",
      experienceLevel: "Mid Level",
      salary: "$130/hr",
      location: "Menlo Park, CA"
    },
    {
      id: 7,
      img: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      company: "Stripe",
      timeAgo: "6 days ago",
      title: "Software Architect",
      employmentType: "Full Time",
      experienceLevel: "Lead Level",
      salary: "$180/hr",
      location: "San Francisco, CA"
    },
    {
      id: 8,
      img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      company: "Spotify",
      timeAgo: "1 day ago",
      title: "UI Software Engineer",
      employmentType: "Part Time",
      experienceLevel: "Junior Level",
      salary: "$95/hr",
      location: "Stockholm, Sweden"
    },

    {
      id: 10,
      img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      company: "Tesla",
      timeAgo: "Yesterday",
      title: "Embedded C++ Developer",
      employmentType: "Full Time",
      experienceLevel: "Mid Level",
      salary: "$125/hr",
      location: "Austin, TX"
    }
  ];
*/}
  





  // const [name, setName] = useState(" ");
  // function btnClick() {
  //     setName(" ")
  //   }

  return (
    <>
      
      <button onClick={btnClick}>{ num}</button>
      {/*
      <div className='parent'>
        {jobCardsData.map((data) => {
          return <Card key={data.id} data={data} />
        })}</div>
*/}
      
      {/* <DigitalClock stl={{ backgroundColor: "red" }} />
      <DigitalClock stl={{ backgroundColor: "blue" }} />
      <DigitalClock stl={{ backgroundColor: "green" }} />
      <DigitalClock stl={{ backgroundColor: "orange" }} />
      <DigitalClock stl={{ backgroundColor: "yellow" }} />
      <DigitalClock stl={{ backgroundColor: "black", color: "white" }} /> */}




      {/* <Table/> */}

      {/* <RadioButtonAndDropDownList/> */}
      {/* <input type="text"  value={name} onChange={(e) => (setName(e.target.value))} />
      <h1>{name}</h1>
      <button onClick={btnClick}>Clear</button>*/}
      {/* <Skill style={{display: "flex", flexDirection: "column" ,color:"white",fontSize:"2rem"}}/> */}

    </>
  )
}

export default App

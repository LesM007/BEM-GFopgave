3.50: OOP - Object-Oriented programming
Tænker over tingene som værende objekter i code, som alle kommunikere med hinanden.

5.20: Encapsulation
Separere objekter som så kan tages ud og bruges i andre projekter, modvirke at der er for mange 
strenge der så strækkes på tværs af projekter og bliver spaghettikode.

6.30: Nicole Sullivan's Media Object
Identificere gentagende mønstre(MODULER), Facebook eks. 2 kolonner, venstre block/img/ikon og 
højre indhold/tekst. Taget fra backend til frontend.
Istedet for at gentage disse mønstre for hvert spor mange gange, identificeres det en gang og 
anvendes på de forskellige spor.

8.57: SMACSS/OOCSS
5 primærer grupper;
Base(HTML/h1/h2)
Layout(STORE side sektioner .header, .footer)kan ses 10 meter væk når der kigges på siden.
Module(se ovenstående)
State(Overider med CSS-tricks eller JS)
Theme(valgfri eks. farve/sæson tema)

19.05: CSS alm
Desto mere specifik CSS en regel er desto større chance er der for at de bliver tildelt.

20.50: Singel selektor vs dobbelt selektor
I CSS vil en klasse/class blive overridet såfremt samme element benævnes i en dobbelt selektor.
Klasse vægter ikke altid højst i specificity.
body h1 > .nyfarve

22.06: ID overruler alt - BRUG ALDRIG ID I CSS
Så selv hvis der tildeles en klasse eller lign senere.
......medmindre du i en gammel IE laver over 600 klasser.

24.20: BEM giver bedre preformance
Med flere selektorer i CSS skal alle disse løbes(højre mod venstre/baglæns) igennem og med
klasser sker det med det samme. Kan også nemt overrides.
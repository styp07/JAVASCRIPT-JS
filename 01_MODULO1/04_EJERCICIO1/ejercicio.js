dCofla = prompt("cuanto dinero tienes Cofla?");
dRoberto = prompt("cuanto dinero tienes Roberto?");
dPedro = prompt("cuanto dinero tienes Pedro?");

dCofla = parseInt(dCofla);

if (dCofla >= 0.6 && dCofla < 1) {
	alert("cofla; comprate el helado de agua");
	alert("y te sobran" + (dCofla - 0.6));
}

else if (dCofla >= 1 && dCofla < 1.6) {
	alert("cofla; comprate el helado de crema");
	alert("y te sobran" + (dCofla - 1));
}
else if (dCofla >= 1.6 && dCofla < 1.7) {
	alert("cofla; comprate el helado de heladix");
	alert("y te sobran" + (dCofla - 1.6));
}
else if (dCofla >= 1.7 && dCofla < 1.8) {
	alert("cofla; comprate el helado de heladovich");
	alert("y te sobran" + (dCofla - 1.7));
}
else if (dCofla >= 1.8 && dCofla < 2.9) {
	alert("cofla; comprate el helado de helardo");
	alert("y te sobran" + (dCofla - 1.8));
}

else if (dCofla >= 2.9) {
    alert("cofla, comprate helado con confites o el pote de 1/4kg");
	alert("y te sobran" + (dCofla - 2.9));

} else {
	alert("lo siento cofla, no te alcanza para ningun helado");
}





if (dRoberto >= 0.6 && dRoberto < 1) {
	alert("roberto, comprate el helado de agua");
}

else if (dRoberto >= 1 && dRoberto < 1.6) {
	alert("roberto, comprate el helado de crema");
}
else if (dRoberto >= 1.6 && dRoberto < 1.7) {
	alert("roberto, comprate el helado de heladix");
}
else if (dRoberto >= 1.7 && dRoberto < 1.8) {
	alert("roberto, comprate el helado de heladovich");
}
else if (dRoberto >= 1.8 && dRoberto < 2.9) {
	alert("roberto, comprate el helado de helardo");
}

else if (dRoberto >= 2.9) {
    alert("roberto, comprate helado con confites o el pote de 1/4kg");

} else {
	alert("lo siento roberto, no te alcanza para ningun helado");
}




if (dPedro >= 0.6 && dPedro < 1) {
	alert("pedro; comprate el helado de agua");
}

else if (dPedro >= 1 && dPedro < 1.6) {
	alert("pedro; comprate el helado de crema");
}
else if (dPedro >= 1.6 && dPedro < 1.7) {
	alert("pedro; comprate el helado de heladix");
}
else if (dPedro >= 1.7 && dPedro < 1.8) {
	alert("pedro; comprate el helado de heladovich");
}
else if (dPedro >= 1.8 && dPedro < 2.9) {
	alert("pedro; comprate el helado de helardo");
}

else if (dPedro >= 2.9) {
    alert("pedro, comprate helado con confites o el pote de 1/4kg");

} else {
	alert("lo siento pedro, no te alcanza para ningun helado");
}
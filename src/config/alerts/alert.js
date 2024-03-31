import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SweetAlert = withReactContent(Swal)

export const customAlert = (title, text, icon) => {
    return SweetAlert.fire({
        title,
        text,
        icon,
        confirmButtonColor: "#009475",
        confirmButtonText: "Aceptar"
    });
}

export const confirmAlert = (preConfirm) => SweetAlert.fire({
    title: "¿Estás seguro de realizar la acción?",
    text: "Le solicitamos esperar a que termine la acción",
    icon: "info",
    confirmButtonColor: "#009475",
    confirmButtonText: "Aceptar",
    cancelButtonColor: "#A32D2D",
    cancelButtonText: "Cancelar",
    reverseButtons: true,
    backdrop: true,
    showCancelButton: true,
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !SweetAlert.isLoading(),
    preConfirm
});

export const closeAlert = (preConfirm) => SweetAlert.fire({
    title: "¿Desea cerrar sesión?",
    icon: "info",
    confirmButtonColor: "#009475",
    confirmButtonText: "Aceptar",
    cancelButtonColor: "#A32D2D",
    cancelButtonText: "Cancelar",
    reverseButtons: true,
    backdrop: true,
    showCancelButton: true,
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !SweetAlert.isLoading(),
    preConfirm
});

export const errorAlert = (errorMessage, onClose) => SweetAlert.fire({
    title: "Usuario y/o contraseña incorrectos",
    icon: "error",
    backdrop: true,
    allowOutsideClick: true,
    showConfirmButton: false,
    timer: 2000,
    onClose 
});
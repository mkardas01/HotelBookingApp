package com.hotel.api.controller;

import com.hotel.api.dto.NewReservationDTO;
import com.hotel.api.exception.BookRoomDateException;
import com.hotel.api.exception.ReservationDateException;
import com.hotel.api.exception.ReservationException;
import com.hotel.api.model.Reservation;
import com.hotel.api.model.Room;
import com.hotel.api.service.ReservationService;
import com.hotel.api.service.RoomService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private RoomService roomService;

    @PostMapping("/reserve/{roomID}")
    @ResponseBody
    @CrossOrigin
    public ResponseEntity<?> reserveRoom(@PathVariable Integer roomID, @RequestBody @Valid NewReservationDTO reservationDTO) {

        return new ResponseEntity<>(reservationService.reserveRoom(reservationDTO, roomID), HttpStatus.OK);

    }

    @GetMapping("/getAll")
    public List<Reservation> getAllReservation(){

        return reservationService.getAllReservation();

    }
}

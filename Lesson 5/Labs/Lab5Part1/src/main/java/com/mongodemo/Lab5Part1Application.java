package com.mongodemo;

import com.mongodemo.data.StudentRepository;
import com.mongodemo.domain.Address;
import com.mongodemo.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Lab5Part1Application implements CommandLineRunner {

	@Autowired
	private StudentRepository studentRepository;

	public static void main(String[] args) {

		SpringApplication.run(Lab5Part1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*Address address1 = new Address("1000 N 4th St,", "Iowa City", "58778");
		Address address2 = new Address("207 5th St", "Fairfield", "52556");
		Address address3 = new Address("505 S 5th St", "Des Moines", "98778");

		Student student1 = new Student(101, "Ahmed Ali", "642-474-7877", "aali@test.com");
		student1.setAddress(address2);
		studentRepository.save(student1);

		Student student2 = new Student(102, "Amgad Shalaby", "641-575-8855", "ashalaby@test.com");
		student2.setAddress(address2);
		studentRepository.save(student2);

		Student student3 = new Student(103, "Mohammed Hammam", "640-989-1125", "mhammam@test.com");
		student3.setAddress(address2);
		studentRepository.save(student3);

		Student student4 = new Student(104, "Abdelrahman Emam", "632-898-9960", "aemam@test.com");
		student4.setAddress(address1);
		studentRepository.save(student4);

		Student student5 = new Student(105, "Mohammed Rashad", "631-444-8998", "mrashad@test.com");
		student5.setAddress(address3);
		studentRepository.save(student5);*/

		/*----------------------------get All students-------------------------------*/
		System.out.println("--------------------------------------------------------------");
		System.out.println(studentRepository.findAll());
		System.out.println("--------------------------------------------------------------");
		/*----------------------------get Students with name -------------------------------*/
		System.out.println(studentRepository.findStudentsByName("Mohammed Hammam"));
		System.out.println("--------------------------------------------------------------");

		/*----------------------------get student by phone number-------------------------------*/
		System.out.println(studentRepository.findByPhoneNumber("632-898-9960"));
		System.out.println("--------------------------------------------------------------");

		/*----------------------------get students from certain city-------------------------------*/
		System.out.println(studentRepository.findByCity("Fairfield"));
		System.out.println("--------------------------------------------------------------");

	}
}

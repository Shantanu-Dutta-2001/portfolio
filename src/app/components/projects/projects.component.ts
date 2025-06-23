import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ArrowRight, Github, LucideAngularModule } from "lucide-angular";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
}

@Component({
  selector: "app-projects",
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.css",
})
export class ProjectsComponent {
  githubIcon = Github;
  arrowRightIcon = ArrowRight;

  projects: Project[] = [
    {
      title: "ERS - Event Registration System",
      description:
        "A comprehensive event registration platform built with Angular and .NET, featuring user authentication, event management, and payment integration.",
      technologies: ["Angular", ".NET", "C#", "SQL Server"],
      features: [
        "User Registration",
        "Event Management",
        "Payment Gateway",
        "Admin Dashboard",
      ],
      image: "🎟️",
    },
    {
      title: "EMS - Event Management System",
      description:
        "Full-featured event management solution with real-time updates, attendee tracking, and comprehensive reporting capabilities.",
      technologies: ["Angular", ".NET Core", "Entity Framework", "SignalR"],
      features: [
        "Real-time Updates",
        "Attendee Tracking",
        "Reporting",
        "Multi-user Support",
      ],
      image: "📅",
    },
    {
      title: "HAS - Help Desk System",
      description:
        "IT help desk application for ticket management, user support, and issue resolution with role-based access control.",
      technologies: ["Angular", ".NET", "SQL Server", "Web APIs"],
      features: [
        "Ticket Management",
        "Role-based Access",
        "Issue Tracking",
        "Notification System",
      ],
      image: "🎫",
    },
  ];
}

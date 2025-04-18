# PlcMonitor

PlcMonitor is a Windows Forms application designed to interface with PLCs (Programmable Logic Controllers), enabling users to monitor and control PLC data in real-time. It supports communication with ABB robots and provides a user-friendly interface for managing connections and visualizing data.

## Features

- **ABB Robot Integration**: Establish and manage connections with ABB robots seamlessly.
- **Real-Time Monitoring**: Continuously monitor PLC data to ensure optimal performance.
- **Data Exposure via Web Services**: Expose PLC data through ABB web services for external access and integration.
- **Connection Status Display**: Visual indicators to show the current status of the PLC connection.

## Technologies Used

- **C#**: Primary programming language for application development.
- **Windows Forms**: Used for building the graphical user interface.
- **S7.Net**: Library for communicating with Siemens S7 PLCs.
- **BackgroundService**: Handles background tasks and operations.
- **Swagger**: For API documentation and testing.
- **Newtonsoft.Json**: Used for JSON serialization and deserialization.

## Getting Started

### Prerequisites

- .NET Framework (compatible version)
- Visual Studio or another C# IDE

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hakantercann/PlcMonitor.git

﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Modul5HW7Server.DataAccess;

namespace Modul5HW7Server.Migrations
{
    [DbContext(typeof(MyDbContext))]
    partial class MyDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Modul5HW6Server.ModelsView.CustomerView", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Customers");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            FirstName = "Yurii",
                            LastName = "Leonov"
                        },
                        new
                        {
                            Id = 2,
                            FirstName = "Andry",
                            LastName = "Sergeev"
                        },
                        new
                        {
                            Id = 3,
                            FirstName = "Dima",
                            LastName = "Nazarov"
                        },
                        new
                        {
                            Id = 4,
                            FirstName = "Alegzander",
                            LastName = "Shpic"
                        },
                        new
                        {
                            Id = 5,
                            FirstName = "Sergey",
                            LastName = "Polchaninov"
                        },
                        new
                        {
                            Id = 6,
                            FirstName = "Stepan",
                            LastName = "Bandera"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}

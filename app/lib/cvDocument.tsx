import React from "react";
import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import {
  certificates,
  education,
  languages,
  organizations,
  personalInfo,
  skills,
  workExperiences,
} from "@/app/lib/data";

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 32,
    fontSize: 10,
    color: "#111111",
    lineHeight: 1.45,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
  },
  contactLine: {
    fontSize: 9,
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#111111",
    paddingBottom: 4,
    marginBottom: 8,
  },
  paragraph: {
    marginBottom: 6,
  },
  entry: {
    marginBottom: 10,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 4,
  },
  entryHeaderLeft: {
    flexGrow: 1,
    flexShrink: 1,
    paddingRight: 8,
  },
  entryTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  entrySubtitle: {
    fontSize: 9.25,
  },
  entryMeta: {
    width: 130,
    textAlign: "right",
    fontSize: 9,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
    paddingRight: 6,
  },
  bullet: {
    width: 10,
    fontFamily: "Helvetica-Bold",
  },
  bulletText: {
    flex: 1,
  },
  compactEntry: {
    marginBottom: 8,
  },
  skillLine: {
    marginBottom: 5,
  },
  strong: {
    fontFamily: "Helvetica-Bold",
  },
  link: {
    color: "#111111",
    textDecoration: "none",
  },
});

const groupedSkills = {
  Core: skills
    .filter((skill) => skill.category === "core")
    .map((skill) => skill.name),
  "Frameworks and Libraries": skills
    .filter((skill) => skill.category === "framework")
    .map((skill) => skill.name),
  Tools: skills
    .filter((skill) => skill.category === "tools")
    .map((skill) => skill.name),
  "Soft Skills": skills
    .filter((skill) => skill.category === "soft")
    .map((skill) => skill.name),
};

export function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
          <Text style={styles.contactLine}>
            {personalInfo.email} | {personalInfo.location} |{" "}
            <Link src={personalInfo.linkedin} style={styles.link}>
              {personalInfo.linkedin}
            </Link>{" "}
            |{" "}
            <Link src={personalInfo.github} style={styles.link}>
              {personalInfo.github}
            </Link>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.paragraph}>{personalInfo.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {workExperiences.map((experience) => (
            <View key={experience.id} style={styles.entry}>
              <View style={styles.entryHeader}>
                <View style={styles.entryHeaderLeft}>
                  <Text style={styles.entryTitle}>{experience.role}</Text>
                  <Text style={styles.entrySubtitle}>
                    {experience.company}
                    {experience.companyNote
                      ? `, ${experience.companyNote}`
                      : ""}
                  </Text>
                </View>
                <Text style={styles.entryMeta}>
                  {experience.period} | {experience.location}
                </Text>
              </View>

              {experience.responsibilities.map((responsibility, index) => (
                <View
                  key={`${experience.id}-${index}`}
                  style={styles.bulletRow}
                >
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{responsibility}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          {Object.entries(groupedSkills).map(([label, values]) => (
            <Text key={label} style={styles.skillLine}>
              <Text style={styles.strong}>{label}: </Text>
              {values.join(", ")}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((item) => (
            <View key={item.degree} style={styles.compactEntry}>
              <View style={styles.entryHeader}>
                <View style={styles.entryHeaderLeft}>
                  <Text style={styles.entryTitle}>{item.degree}</Text>
                  <Text style={styles.entrySubtitle}>{item.institution}</Text>
                </View>
                <Text style={styles.entryMeta}>{item.period}</Text>
              </View>
              <Text>{item.thesis}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {certificates.map((certificate) => (
            <View key={certificate.name} style={styles.compactEntry}>
              <Text style={styles.entryTitle}>{certificate.name}</Text>
              <Text style={styles.entrySubtitle}>
                {certificate.issuer} | {certificate.period} |{" "}
                {certificate.certNo}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Organizations</Text>
          {organizations.map((organization) => (
            <View key={organization.name} style={styles.compactEntry}>
              <View style={styles.entryHeader}>
                <View style={styles.entryHeaderLeft}>
                  <Text style={styles.entryTitle}>{organization.name}</Text>
                  <Text style={styles.entrySubtitle}>{organization.role}</Text>
                </View>
                <Text style={styles.entryMeta}>{organization.period}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          {languages.map((language) => (
            <Text key={language.name} style={styles.skillLine}>
              <Text style={styles.strong}>{language.name}: </Text>
              {language.level}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}

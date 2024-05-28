const Job = require("../../models/admin/job");
const Employer = require("../../models/employer/employer");

module.exports.updateCandidateStatus = async (req, res) => {
  const { employerId, candidateId, status, note, jobId } = req.body;
  try {
    const employer = await Employer.findById(employerId);
    const job = await Job.findById(jobId);
    if (!employer) {
      return res.status(404).send("Employer not found");
    }
    if (!job) {
      return res.status(404).send("Job not found");
    }

    const candidateIndexInJob = await job.applications.findIndex(
      (c) => c.candidate.toString() === candidateId
    );
    if (candidateIndexInJob !== -1) {
      job.applications[candidateIndexInJob].status = status;
      job.applications[candidateIndexInJob].note = note;
    } else {
      return res.status(404).send("Job not found");
    }

    // Update the status and note for the specific candidate
    const candidateIndex = employer.applications.findIndex(
      (c) =>
        c.candidate.toString() === candidateId &&
        c.job.toString() === req.body.jobId
    );
    if (candidateIndex !== -1) {
      employer.applications[candidateIndex].status = status;
      employer.applications[candidateIndex].note = note;
    } else {
      return res.status(404).send("Candidate not found in shortlist");
    }

    await employer.save();
    await job.save();
    res.status(200).send({ message: "Status updated", employer });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

module.exports.updateShortlistCandidateStatus = async (req, res) => {
  const { employerId, candidateId, status, note, jobId } = req.body;
  try {
    const employer = await Employer.findById(employerId);
    const job = await Job.findById(jobId);

    if (!employer) {
      return res.status(404).send("Employer not found");
    }

    if (!job) {
      return res.status(404).send("Job not found");
    }

    const candidateIndexInJob = await job.applications.findIndex(
      (c) => c.candidate.toString() === candidateId
    );
    if (candidateIndexInJob !== -1) {
      job.applications[candidateIndexInJob].status = status;
      job.applications[candidateIndexInJob].note = note;
    } else {
      return res.status(404).send("Job not found");
    }

    // Update the status and note for the specific candidate
    const candidateIndex = employer.shortlistedCandidates.findIndex(
      (c) =>
        c.candidate.toString() === candidateId &&
        c.job.toString() === req.body.jobId
    );
    if (candidateIndex !== -1) {
      employer.shortlistedCandidates[candidateIndex].status = status;
      employer.shortlistedCandidates[candidateIndex].note = note;
    } else {
      return res.status(404).send("Candidate not found in shortlist");
    }

    await employer.save();
    await job.save();
    res.status(200).send({ message: "Status updated", employer });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
